import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';
import {unstable_cache} from "next/cache";
import {revalidateDonationsProgressTag} from "@/utils/cache-tags";
import cache from '@/utils/cache';


//const getTotalDonations = unstable_cache(async (projectId: any) => {
//    return await prisma.donation.aggregate({
//        _sum: { amount: true },
//        where: { causeId: projectId} }).then(r => r._sum.amount ?? 0);
//});
//[(revalidateDonationsProgressTag)],
//{ tags: [revalidateDonationsProgressTag]});

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    
    const projectId:string = req.nextUrl.pathname.split('/').pop() ?? '';

    // Try to get the cached total amount
    let totalAmount:number|null|undefined = null;
    if (cache.has(projectId)) 
    {
        totalAmount = cache.get(projectId);
        console.log('GOT FROM CACHE! (' + projectId + ')');
    }
    

    if (totalAmount === null || totalAmount === undefined) {
        totalAmount = await prisma.donation.aggregate({
            _sum: { amount: true },
            where: { causeId: projectId }
        }).then(r => {
            console.log('GOT FROM DB :( (' + projectId + ')');
            return r._sum.amount ?? 0;
        });

        // Update the cache with the new value
        cache.set(projectId, totalAmount);
    }
    
    return NextResponse.json({ totalDonated: totalAmount }, { status: 200 });
}
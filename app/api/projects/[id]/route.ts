import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';
import {unstable_cache} from "next/cache";
import {revalidateDonationsProgressTag} from "@/utils/cache-tags";
import cache from 'memory-cache';


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
    let totalAmount = cache.get(projectId);

    if (totalAmount === null) {
        totalAmount = await prisma.donation.aggregate({
            _sum: { amount: true },
            where: { causeId: projectId }
        }).then(r => r._sum.amount ?? 0);

        // Update the cache with the new value
        await cache.put(projectId, totalAmount);
    }
    
    return NextResponse.json({ totalDonated: totalAmount }, { status: 200 });
}
import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';
import {unstable_cache} from "next/cache";
import {revalidateDonationsProgressTag} from "@/utils/cache-tags";

const prisma = new PrismaClient();


export async function GET(req: NextRequest) {
    
    const projectId = req.nextUrl.pathname.split('/').pop();

    const getTotalDonations = unstable_cache(async (projectId: any) => {
            return prisma.donation.aggregate({
                _sum: { amount: true },
                where: { causeId: projectId} }).then(r => r._sum.amount ?? 0);
        },
        [(revalidateDonationsProgressTag+projectId)],
        { tags: [revalidateDonationsProgressTag+projectId]});
    
    const totalAmount = await getTotalDonations(projectId);
    
    return NextResponse.json({ totalDonated: totalAmount }, { status: 200 });
}
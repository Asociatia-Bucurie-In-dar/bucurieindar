import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    
    const projectId = req.nextUrl.pathname.split('/').pop();
    
    const totalDonations = await prisma.donation.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            causeId: projectId,
        },
    });
    const totalAmount = totalDonations._sum.amount ?? 0;
    
    return NextResponse.json({ totalDonated: totalAmount }, { status: 200 });
}
import { NextResponse } from 'next/server';
import { insertWaitlistRow } from '@/lib/catalyst';

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json();

        console.log('Adding to Catalyst Waitlist:', { email, source });

        // Insert into Catalyst DataStore
        const result = await insertWaitlistRow({
            Email: email,
            Source: source || 'direct'
        });

        return NextResponse.json({
            success: true,
            data: result
        });
    } catch (error: any) {
        console.error('Waitlist API error:', error);

        return NextResponse.json(
            {
                error: 'Failed to add to waitlist',
                message: error.message
            },
            { status: 500 }
        );
    }
}

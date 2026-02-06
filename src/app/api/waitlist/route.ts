import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json();

        console.log('Waitlist submission:', { email, source });

        // TODO: Add Catalyst DataStore integration after deployment works
        // For now, just return success
        return NextResponse.json({
            success: true,
            message: 'Added to waitlist',
            data: { email, source }
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

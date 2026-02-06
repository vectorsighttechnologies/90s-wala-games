import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { gameName, email } = await request.json();

        console.log('Game suggestion:', { gameName, email });

        // TODO: Add Catalyst DataStore integration after deployment works
        // For now, just return success
        return NextResponse.json({
            success: true,
            message: 'Suggestion received',
            data: { gameName, email }
        });
    } catch (error: any) {
        console.error('Suggestion API error:', error);

        return NextResponse.json(
            {
                error: 'Failed to submit suggestion',
                message: error.message
            },
            { status: 500 }
        );
    }
}

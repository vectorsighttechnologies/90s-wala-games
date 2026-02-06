import { NextResponse } from 'next/server';
import { insertSuggestionRow } from '@/lib/catalyst';

export async function POST(request: Request) {
    try {
        const { gameName, email } = await request.json();

        console.log('Submitting Game Suggestion to Catalyst:', { gameName, email });

        // Insert into Catalyst DataStore
        const result = await insertSuggestionRow({
            GameName: gameName,
            Email: email
        });

        return NextResponse.json({
            success: true,
            data: result
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

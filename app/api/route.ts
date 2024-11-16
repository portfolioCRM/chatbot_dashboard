import { NextResponse } from 'next/server';

/**
 * Handler for GET requests for health care service.
 * @returns {Promise<NextResponse>} A Promise resolving to the Next.js response.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const healthcareData = {
      status: 'healthy',
      service: 'Health Care Service',
      timestamp: new Date().toISOString(),
    };
    return NextResponse.json(
      {
        success: true,
        data: healthcareData,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    const healthcareFailureData = {
      status: 'unhealthy',
      service: 'Health Care Service',
      timestamp: new Date().toISOString(),
    };
    return NextResponse.json(
      {
        success: false,
        data: healthcareFailureData,
        error: errorMessage,
      },
      {
        status: 500,
      },
    );
  }
}

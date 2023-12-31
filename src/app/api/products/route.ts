import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

import { client } from "../../../../sanity/lib/client";
export async function GET() {
    try {
     let response = await client.fetch(`*[_type == "Products"]`);
     console.log(response);
     return NextResponse.json({response})
    } catch (error) {
     console.log((error as {message:string}).message);
     return NextResponse.json({"Errror": error})
    }
   
}
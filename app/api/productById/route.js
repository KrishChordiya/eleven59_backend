import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";

export async function GET(req, res){
    const id = req.nextUrl.searchParams.get("id")
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      return NextResponse.json("No such document!");
    }
}
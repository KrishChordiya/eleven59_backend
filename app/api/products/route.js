import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/configs/firebase";


export async function GET(req, res) {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products=[];
    querySnapshot.forEach((doc) => {
        products.push({id:doc.id, ...doc.data()});
    });
    return NextResponse.json(products)
}
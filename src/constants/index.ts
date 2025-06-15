'use client'
import { useState } from "react";

export function someRegularFunction() {
    const [count, setCount] = useState(0); // ❌ Error!
    console.log('count', count)
}
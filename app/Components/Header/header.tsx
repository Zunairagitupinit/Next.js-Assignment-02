import Link from "next/link";
import React from "react";

const Header=()=>{
    return(
        <div className="main">
            <h2>Header</h2>
            <ul>
                <h2>
                <li><Link href="/"><button>Home</button></Link></li>
                <li><Link href="/about"><button>About</button></Link></li>
                <li><Link href="/contact"><button>ContactUs</button></Link></li>
                <li><Link href="/service"><button>Services</button></Link></li>
                </h2>
            </ul>
        </div>
    )
}
export default Header
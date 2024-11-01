import Link from "next/link";

const service = ()=>{
    return(
        <div>
            <h1> Service Page</h1>

            <ul>
                <h3>
                <li><Link href="/service/video-editing">This is video-editing Page</Link></li>
                <li><Link href="/service/webdevelopment">This is my webdevelopment Page</Link></li>
                </h3>
            </ul>
        </div>
    )
}
export default service;
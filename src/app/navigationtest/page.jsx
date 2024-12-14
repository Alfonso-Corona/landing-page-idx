"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

  //Clien side navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("hola");

  console.log(q);

  const handleClick = () => {
    console.log("click");
    router.push('/');
    router.replace('/');// dont add an entry in the navigation history stack, so you cant go back to previos page
    router.refresh();//only refresh all page
    router.back();//return to the previous page
    router.forward()//go to next history stack 
  }

  return(
    <div className="">
      <Link href="/" prefetch={false}>Click Here</Link>
      <button onClick={handleClick}>Write And Redirect</button>
    </div>
  )
}

export default NavigationTestPage;
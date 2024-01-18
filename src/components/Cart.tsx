"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

const Cart = () => {
    const itemCount = 0
    const fee = 1

    return <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart
                aria-hidden="true"
                className="h-6 w-6 flex-shrink text-gray-400 group-hover:text-gray-500">


            </ShoppingCart>
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0


            </span>

        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>
                    Cart(0)
                </SheetTitle>

            </SheetHeader>
            {
                itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            cart item
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm" >
                                <div className="flex">
                                    <div className="flex-1">
                                        <span>
                                            Shipping
                                        </span>
                                        <span>
                                            Free
                                        </span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">
                                        <span >
                                            Transaction fee
                                        </span>
                                        <span >
                                            {formatPrice(fee)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">
                                        <span >
                                            Total
                                        </span>
                                        <span >
                                            {formatPrice(fee)}
                                        </span>
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetTrigger
                                        asChild
                                    >
                                        <Link href="/cart" className={buttonVariants({
                                            className: "w-full",
                                        })}>

                                            continue checkout
                                        </Link>

                                    </SheetTrigger>
                                </SheetFooter>


                            </div>

                        </div>
                    </>
                ) : (

                    <div className="flex h-full flex-col items-center justify-center space-y-1">

                        <div className="relative mb-4 h-60 w-60 text-muted-foreground" aria-hidden="true">
                            <Image src="/hippo-empty-cart.png"
                                fill
                                alt="Emplty"

                            />

                        </div>
                        <div className="text-xl font-semibold">
                            Your cart is empty

                        </div>
                        <SheetTrigger
                            asChild
                        >
                            <Link href="/product" className={buttonVariants({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground"
                            })}>

                                add item to your cart
                            </Link>

                        </SheetTrigger>
                    </div>
                )
            }

        </SheetContent>

    </Sheet>

}
export default Cart
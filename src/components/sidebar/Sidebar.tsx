// **** Library Imports ****
import { motion, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// **** Local Imports ****
import { useSidebar } from "./hooks/useSidebar";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet/sheet";
import { Separator } from "../ui/separator/separator";

import { sidebarItems } from "./sidebarItems";

const Sidebar = () => {
  const location = useLocation();

  const pathnameArray = location.pathname.split("/");
  const selectedItem = pathnameArray[pathnameArray.length - 1];

  const { isOpen, onOpenChange } = useSidebar();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  const sidebarVariants: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: 254,
      opacity: 1,
    },
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth < 1260) {
      onOpenChange(false);
    } else {
      onOpenChange(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onOpenChange, windowWidth]);

  return (
    <>
      {windowWidth >= 1260 ? (
        <motion.div
          layout="preserve-aspect"
          className="border-r h-full py-3 overflow-y-auto shrink-0"
          variants={sidebarVariants}
          animate={isOpen ? "visible" : "hidden"}
        >
          {sidebarItems.map((item, index) => {
            return (
              <React.Fragment key={item.id || index}>
                {item.id !== null ? (
                  <Link
                    to={item.slug}
                    className={cn(
                      "relative flex items-center",
                      selectedItem !== item.id && "hover:bg-accent"
                    )}
                  >
                    {selectedItem === item.id && (
                      <motion.div
                        layoutId="backdrop-bg"
                        className="absolute inset-0 bg-border"
                      />
                    )}
                    <div className="px-6 py-3 flex items-center gap-4 relative z-[1]">
                      <item.icon
                        className={cn(
                          "w-5 h-5",
                          selectedItem === item.id && "text-primary"
                        )}
                      />
                      <span className={cn("font-medium")}>{item.label}</span>
                    </div>
                  </Link>
                ) : (
                  <Separator className="my-2" key={index} />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      ) : (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
          <SheetContent side="left" className="w-[254px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-3">
              {sidebarItems.map((item, index) => {
                return (
                  <React.Fragment key={item.id || index}>
                    {item.id !== null ? (
                      <Link
                        key={item.id}
                        to={item.slug}
                        className={cn(
                          "relative flex items-center rounded-md",
                          selectedItem !== item.id && "hover:bg-accent"
                        )}
                        onMouseDown={() => onOpenChange(false)}
                      >
                        {selectedItem === item.id && (
                          <motion.div
                            layoutId="backdrop-bg"
                            className="absolute inset-0 bg-border rounded-md"
                          />
                        )}
                        <div className="px-6 py-3 flex items-center gap-4 relative z-[1]">
                          <item.icon
                            className={cn(
                              "w-5 h-5",
                              selectedItem === item.id && "text-primary"
                            )}
                          />
                          <span className={cn("font-medium")}>
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <Separator className="my-2" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default Sidebar;

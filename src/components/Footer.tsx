"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-4 text-xl font-light">Gavin Group</div>
            <p className="text-sm text-gray-600">
              Building intelligent software solutions for the future.
            </p>
          </div>

          <div>
            <div className="mb-4 font-medium">Navigation</div>
            <ul className="space-y-2">
              {["Solutions", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-medium">Contact</div>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:inbox@gavin-group.com"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                >
                  inbox@gavin-group.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 font-medium">Social</div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 transition-colors hover:text-black"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="mb-4 text-sm text-gray-600 sm:mb-0">
              © {currentYear} Gavin Group Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="transition-colors hover:text-black">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-black">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

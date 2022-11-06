import React from "react";
import { useColorModeValue, Link, HStack } from "@chakra-ui/react";
import LinkNext from "next/link";
import { routes } from "@prisma/client";

export default function NavRoutesLink({ id, path, name }: routes): JSX.Element {
  return (
    <>
      <Link
        key={id}
        href={path}
        rounded={"full"}
        as={LinkNext}
        px={2}
        py={1}
        _activeLink={{
          color: useColorModeValue("gray.300", "gray.700"),
          fontWeight: "semibold",
        }}
        >
          {name}
        </Link>
    </>
  );
}

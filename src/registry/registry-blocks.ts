import { Registry } from "@/registry/schema"

export const blocks: Registry = [
  {
    name: "authentication-01",
    type: "registry:block",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "shadcn/card", "textfield", "field"],
    files: ["block/authentication-01.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-02",
    type: "registry:block",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "shadcn/card", "textfield", "field"],
    files: ["block/authentication-02.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-03",
    type: "registry:block",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "shadcn/card", "textfield", "field"],
    files: ["block/authentication-03.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-04",
    type: "registry:block",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "shadcn/card", "textfield", "field"],
    files: ["block/authentication-04.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
]

import { Registry } from "@/registry/schema"

export const blocks: Registry = [
  {
    name: "authentication-01",
    type: "registry:block",
    registryDependencies: ["button", "textfield", "field"],
    files: ["block/authentication-01.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
]

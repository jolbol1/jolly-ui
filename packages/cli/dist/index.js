#!/usr/bin/env node
import{existsSync as W,promises as le}from"fs";import _ from"path";import J from"path";import{createMatchPath as Ee}from"tsconfig-paths";async function N(t,e){return Ee(e.absoluteBaseUrl,e.paths)(t,void 0,()=>!0,[".ts",".tsx"])}import{cosmiconfig as ke}from"cosmiconfig";import{loadConfig as Pe}from"tsconfig-paths";import*as f from"zod";var K="@/components",H="@/lib/utils",q="app/globals.css",X="tailwind.config.js";var Fe=ke("components",{searchPlaces:["components.json"]}),E=f.object({$schema:f.string().optional(),style:f.string(),rsc:f.coerce.boolean().default(!1),tsx:f.coerce.boolean().default(!0),tailwind:f.object({config:f.string(),css:f.string(),baseColor:f.string(),cssVariables:f.boolean().default(!0)}),aliases:f.object({components:f.string(),utils:f.string()})}).strict(),Ae=E.extend({resolvedPaths:f.object({tailwindConfig:f.string(),tailwindCss:f.string(),utils:f.string(),components:f.string()})});async function w(t){let e=await Le(t);return e?await R(t,e):null}async function R(t,e){let o=await Pe(t);if(o.resultType==="failed")throw new Error(`Failed to load ${e.tsx?"tsconfig":"jsconfig"}.json. ${o.message??""}`.trim());return Ae.parse({...e,resolvedPaths:{tailwindConfig:J.resolve(t,e.tailwind.config),tailwindCss:J.resolve(t,e.tailwind.css),utils:await N(e.aliases.utils,o),components:await N(e.aliases.components,o)}})}async function Le(t){try{let e=await Fe.search(t);return e?E.parse(e.config):null}catch{throw new Error(`Invalid configuration found in ${t}/components.json.`)}}import{detect as je}from"@antfu/ni";async function k(t){let e=await je({programmatic:!0,cwd:t});return e==="yarn@berry"?"yarn":e==="pnpm@6"?"pnpm":e==="bun"?"bun":e??"npm"}import P from"chalk";var p={error(...t){console.log(P.red(...t))},warn(...t){console.log(P.yellow(...t))},info(...t){console.log(P.cyan(...t))},success(...t){console.log(P.green(...t))},break(){console.log("")}};function v(t){typeof t=="string"&&(p.error(t),process.exit(1)),t instanceof Error&&(p.error(t.message),process.exit(1)),p.error("Something went wrong. Please try again."),process.exit(1)}import $e from"path";import*as s from"zod";var Y=s.object({name:s.string(),dependencies:s.array(s.string()).optional(),registryDependencies:s.array(s.string()).optional(),files:s.array(s.string()),type:s.enum(["components:ui","components:component","components:example"])}),Z=s.array(Y),De=Y.extend({files:s.array(s.object({name:s.string(),content:s.string()}))}),Q=s.array(De),ee=s.array(s.object({name:s.string(),label:s.string()})),te=s.object({inlineColors:s.object({light:s.record(s.string(),s.string()),dark:s.record(s.string(),s.string())}),cssVars:s.object({light:s.record(s.string(),s.string()),dark:s.record(s.string(),s.string())}),inlineColorsTemplate:s.string(),cssVarsTemplate:s.string()});import{HttpsProxyAgent as _e}from"https-proxy-agent";import Ne from"node-fetch";var oe=process.env.COMPONENTS_REGISTRY_URL??"https://ui.shadcn.com",Re=process.env.https_proxy?new _e(process.env.https_proxy):void 0;async function F(){try{let[t]=await j(["index.json"]);return Z.parse(t)}catch{throw new Error("Failed to fetch components from registry.")}}async function re(){try{let[t]=await j(["styles/index.json"]);return ee.parse(t)}catch{throw new Error("Failed to fetch styles from registry.")}}async function ne(){return[{name:"slate",label:"Slate"},{name:"gray",label:"Gray"},{name:"zinc",label:"Zinc"},{name:"neutral",label:"Neutral"},{name:"stone",label:"Stone"}]}async function C(t){try{let[e]=await j([`colors/${t}.json`]);return te.parse(e)}catch{throw new Error("Failed to fetch base color from registry.")}}async function O(t,e){let o=[];for(let r of e){let n=t.find(i=>i.name===r);if(n&&(o.push(n),n.registryDependencies)){let i=await O(t,n.registryDependencies);o.push(...i)}}return o.filter((r,n,i)=>i.findIndex(c=>c.name===r.name)===n)}async function A(t,e){try{let o=e.map(n=>`styles/${t}/${n.name}.json`),r=await j(o);return Q.parse(r)}catch{throw new Error("Failed to fetch tree from registry.")}}async function L(t,e,o){if(o&&e.type!=="components:ui")return o;let[r,n]=e.type.split(":");return r in t.resolvedPaths?$e.join(t.resolvedPaths[r],n):null}async function j(t){try{return await Promise.all(t.map(async o=>await(await Ne(`${oe}/registry/${o}`,{agent:Re})).json()))}catch(e){throw console.log(e),new Error(`Failed to fetch registry from ${oe}.`)}}import{promises as He}from"fs";import{tmpdir as qe}from"os";import pe from"path";import{SyntaxKind as Oe}from"ts-morph";var se=async({sourceFile:t,config:e,baseColor:o})=>(e.tailwind?.cssVariables||!o?.inlineColors||t.getDescendantsOfKind(Oe.StringLiteral).forEach(r=>{let n=r.getText();if(n){let i=Me(n.replace(/"/g,""),o.inlineColors);r.replaceWithText(`"${i.trim()}"`)}}),t);function We(t){if(!t.includes("/")&&!t.includes(":"))return[null,t,null];let e=[],[o,r]=t.split("/");if(!o.includes(":"))return[null,o,r];let n=o.split(":"),i=n.pop(),c=n.join(":");return e.push(c??null,i??null,r??null),e}var Ue=["bg-","text-","border-","ring-offset-","ring-"];function Me(t,e){t.includes(" border ")&&(t=t.replace(" border "," border border-border "));let o=t.split(" "),r=new Set,n=new Set;for(let i of o){let[c,g,m]=We(i),u=Ue.find(a=>g?.startsWith(a));if(!u){r.has(i)||r.add(i);continue}let l=g?.replace(u,"");if(l&&l in e.light){r.add([c,`${u}${e.light[l]}`].filter(Boolean).join(":")+(m?`/${m}`:"")),n.add(["dark",c,`${u}${e.dark[l]}`].filter(Boolean).join(":")+(m?`/${m}`:""));continue}r.has(i)||r.add(i)}return[...Array.from(r),...Array.from(n)].join(" ").trim()}var ie=async({sourceFile:t,config:e})=>{let o=t.getImportDeclarations();for(let r of o){let n=r.getModuleSpecifierValue();n.startsWith("@/registry/")&&r.setModuleSpecifier(n.replace(/^@\/registry\/[^/]+/,e.aliases.components)),n=="@/lib/utils"&&r.getNamedImports().find(g=>g.getName()==="cn")&&r.setModuleSpecifier(n.replace(/^@\/lib\/utils/,e.aliases.utils))}return t};import{transformFromAstSync as Be}from"@babel/core";import{parse as Ve}from"@babel/parser";import Ge from"@babel/plugin-transform-typescript";import*as D from"recast";var Je={sourceType:"module",allowImportExportEverywhere:!0,allowReturnOutsideFunction:!0,startLine:1,tokens:!0,plugins:["asyncGenerators","bigInt","classPrivateMethods","classPrivateProperties","classProperties","classStaticBlock","decimal","decorators-legacy","doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importAssertions","importMeta","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining",["pipelineOperator",{proposal:"minimal"}],["recordAndTuple",{syntaxType:"hash"}],"throwExpressions","topLevelAwait","v8intrinsic","typescript","jsx"]},ae=async({sourceFile:t,config:e})=>{let o=t.getFullText();if(e.tsx)return o;let r=D.parse(o,{parser:{parse:i=>Ve(i,Je)}}),n=Be(r,o,{cloneInputAst:!1,code:!1,ast:!0,plugins:[Ge],configFile:!1});if(!n||!n.ast)throw new Error("Failed to transform JSX");return D.print(n.ast).code};import{SyntaxKind as Ke}from"ts-morph";var ce=async({sourceFile:t,config:e})=>{if(e.rsc)return t;let o=t.getFirstChildByKind(Ke.ExpressionStatement);return o?.getText()==='"use client"'&&o.remove(),t};import{Project as Xe,ScriptKind as Ye}from"ts-morph";var Ze=[ie,ce,se],Qe=new Xe({compilerOptions:{}});async function et(t){let e=await He.mkdtemp(pe.join(qe(),"shadcn-"));return pe.join(e,t)}async function $(t){let e=await et(t.filename),o=Qe.createSourceFile(e,t.raw,{scriptKind:Ye.TSX});for(let r of Ze)r({sourceFile:o,...t});return await ae({sourceFile:o,...t})}import me from"chalk";import{Command as tt}from"commander";import{execa as ot}from"execa";import rt from"ora";import U from"prompts";import*as h from"zod";var nt=h.object({components:h.array(h.string()).optional(),yes:h.boolean(),overwrite:h.boolean(),cwd:h.string(),all:h.boolean(),path:h.string().optional()}),fe=new tt().name("add").description("add a component to your project").argument("[components...]","the components to add").option("-y, --yes","skip confirmation prompt.",!0).option("-o, --overwrite","overwrite existing files.",!1).option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).option("-a, --all","add all available components",!1).option("-p, --path <path>","the path to add the component to.").action(async(t,e)=>{try{let o=nt.parse({components:t,...e}),r=_.resolve(o.cwd);W(r)||(p.error(`The path ${r} does not exist. Please try again.`),process.exit(1));let n=await w(r);n||(p.warn(`Configuration is missing. Please run ${me.green("init")} to create a components.json file.`),process.exit(1));let i=await F(),c=o.all?i.map(a=>a.name):o.components;if(!o.components?.length&&!o.all){let{components:a}=await U({type:"multiselect",name:"components",message:"Which components would you like to add?",hint:"Space to select. A to toggle all. Enter to submit.",instructions:!1,choices:i.map(d=>({title:d.name,value:d.name,selected:o.all?!0:o.components?.includes(d.name)}))});c=a}c?.length||(p.warn("No components selected. Exiting."),process.exit(0));let g=await O(i,c),m=await A(n.style,g),u=await C(n.tailwind.baseColor);if(m.length||(p.warn("Selected components not found. Exiting."),process.exit(0)),!o.yes){let{proceed:a}=await U({type:"confirm",name:"proceed",message:"Ready to install components and dependencies. Proceed?",initial:!0});a||process.exit(0)}let l=rt("Installing components...").start();for(let a of m){l.text=`Installing ${a.name}...`;let d=await L(n,a,o.path?_.resolve(r,o.path):void 0);if(!d)continue;if(W(d)||await le.mkdir(d,{recursive:!0}),a.files.filter(y=>W(_.resolve(d,y.name))).length&&!o.overwrite)if(c.includes(a.name)){l.stop();let{overwrite:y}=await U({type:"confirm",name:"overwrite",message:`Component ${a.name} already exists. Would you like to overwrite?`,initial:!1});if(!y){p.info(`Skipped ${a.name}. To overwrite, run with the ${me.green("--overwrite")} flag.`);continue}l.start(`Installing ${a.name}...`)}else continue;for(let y of a.files){let T=_.resolve(d,y.name),be=await $({filename:y.name,raw:y.content,config:n,baseColor:u});n.tsx||(T=T.replace(/\.tsx$/,".jsx"),T=T.replace(/\.ts$/,".js")),await le.writeFile(T,be)}if(a.dependencies?.length){let y=await k(r);await ot(y,[y==="npm"?"install":"add",...a.dependencies],{cwd:r})}}l.succeed("Done.")}catch(o){v(o)}});import{existsSync as M,promises as st}from"fs";import B from"path";import I from"chalk";import{Command as it}from"commander";import{diffLines as at}from"diff";import*as x from"zod";var ct=x.object({component:x.string().optional(),yes:x.boolean(),cwd:x.string(),path:x.string().optional()}),ge=new it().name("diff").description("check for updates against the registry").argument("[component]","the component name").option("-y, --yes","skip confirmation prompt.",!1).option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).action(async(t,e)=>{try{let o=ct.parse({component:t,...e}),r=B.resolve(o.cwd);M(r)||(p.error(`The path ${r} does not exist. Please try again.`),process.exit(1));let n=await w(r);n||(p.warn(`Configuration is missing. Please run ${I.green("init")} to create a components.json file.`),process.exit(1));let i=await F();if(!o.component){let m=n.resolvedPaths.components,u=i.filter(a=>{for(let d of a.files){let G=B.resolve(m,d);if(M(G))return!0}return!1}),l=[];for(let a of u){let d=await de(a,n);d.length&&l.push({name:a.name,changes:d})}l.length||(p.info("No updates found."),process.exit(0)),p.info("The following components have updates available:");for(let a of l){p.info(`- ${a.name}`);for(let d of a.changes)p.info(`  - ${d.filePath}`)}p.break(),p.info(`Run ${I.green("diff <component>")} to see the changes.`),process.exit(0)}let c=i.find(m=>m.name===o.component);c||(p.error(`The component ${I.green(o.component)} does not exist.`),process.exit(1));let g=await de(c,n);g.length||(p.info(`No updates found for ${o.component}.`),process.exit(0));for(let m of g)p.info(`- ${m.filePath}`),await pt(m.patch),p.info("")}catch(o){v(o)}});async function de(t,e){let o=await A(e.style,[t]),r=await C(e.tailwind.baseColor),n=[];for(let i of o){let c=await L(e,i);if(c)for(let g of i.files){let m=B.resolve(c,g.name);if(!M(m))continue;let u=await st.readFile(m,"utf8"),l=await $({filename:g.name,raw:g.content,config:e,baseColor:r}),a=at(l,u);a.length>1&&n.push({file:g.name,filePath:m,patch:a})}}return n}async function pt(t){t.forEach(e=>{if(e)return e.added?process.stdout.write(I.green(e.value)):e.removed?process.stdout.write(I.red(e.value)):process.stdout.write(e.value)})}import{existsSync as Se,promises as z}from"fs";import b from"path";var ue=`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`,he=`import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
`,ye=`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,xe=`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,we=`import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`,ve=`import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`;import Te from"chalk";import{Command as mt}from"commander";import{execa as ft}from"execa";import dt from"lodash.template";import V from"ora";import Ce from"prompts";import*as S from"zod";var gt=["tailwindcss-animate","class-variance-authority","clsx","tailwind-merge"],ut=S.object({cwd:S.string(),yes:S.boolean()}),Ie=new mt().name("init").description("initialize your project and install dependencies").option("-y, --yes","skip confirmation prompt.",!1).option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).action(async t=>{try{let e=ut.parse(t),o=b.resolve(e.cwd);Se(o)||(p.error(`The path ${o} does not exist. Please try again.`),process.exit(1));let r=await w(o),n=await ht(o,r,e.yes);await yt(o,n),p.info(""),p.info(`${Te.green("Success!")} Project initialization completed.`),p.info("")}catch(e){v(e)}});async function ht(t,e=null,o=!1){let r=l=>Te.cyan(l),n=await re(),i=await ne(),c=await Ce([{type:"toggle",name:"typescript",message:`Would you like to use ${r("TypeScript")} (recommended)?`,initial:e?.tsx??!0,active:"yes",inactive:"no"},{type:"select",name:"style",message:`Which ${r("style")} would you like to use?`,choices:n.map(l=>({title:l.label,value:l.name}))},{type:"select",name:"tailwindBaseColor",message:`Which color would you like to use as ${r("base color")}?`,choices:i.map(l=>({title:l.label,value:l.name}))},{type:"text",name:"tailwindCss",message:`Where is your ${r("global CSS")} file?`,initial:e?.tailwind.css??q},{type:"toggle",name:"tailwindCssVariables",message:`Would you like to use ${r("CSS variables")} for colors?`,initial:e?.tailwind.cssVariables??!0,active:"yes",inactive:"no"},{type:"text",name:"tailwindConfig",message:`Where is your ${r("tailwind.config.js")} located?`,initial:e?.tailwind.config??X},{type:"text",name:"components",message:`Configure the import alias for ${r("components")}:`,initial:e?.aliases.components??K},{type:"text",name:"utils",message:`Configure the import alias for ${r("utils")}:`,initial:e?.aliases.utils??H},{type:"toggle",name:"rsc",message:`Are you using ${r("React Server Components")}?`,initial:e?.rsc??!0,active:"yes",inactive:"no"}]),g=E.parse({$schema:"https://ui.shadcn.com/schema.json",style:c.style,tailwind:{config:c.tailwindConfig,css:c.tailwindCss,baseColor:c.tailwindBaseColor,cssVariables:c.tailwindCssVariables},rsc:c.rsc,tsx:c.typescript,aliases:{utils:c.utils,components:c.components}});if(!o){let{proceed:l}=await Ce({type:"confirm",name:"proceed",message:`Write configuration to ${r("components.json")}. Proceed?`,initial:!0});l||process.exit(0)}p.info("");let m=V("Writing components.json...").start(),u=b.resolve(t,"components.json");return await z.writeFile(u,JSON.stringify(g,null,2),"utf8"),m.succeed(),await R(t,g)}async function yt(t,e){let o=V("Initializing project...")?.start();for(let[l,a]of Object.entries(e.resolvedPaths)){let d=b.extname(a)?b.dirname(a):a;l==="utils"&&a.endsWith("/utils")&&(d=d.replace(/\/utils$/,"")),Se(d)||await z.mkdir(d,{recursive:!0})}let r=e.tsx?"ts":"js",n=b.extname(e.resolvedPaths.tailwindConfig),i;n===".ts"?i=e.tailwind.cssVariables?ve:we:i=e.tailwind.cssVariables?xe:ye,await z.writeFile(e.resolvedPaths.tailwindConfig,dt(i)({extension:r}),"utf8");let c=await C(e.tailwind.baseColor);c&&await z.writeFile(e.resolvedPaths.tailwindCss,e.tailwind.cssVariables?c.cssVarsTemplate:c.inlineColorsTemplate,"utf8"),await z.writeFile(`${e.resolvedPaths.utils}.${r}`,r==="ts"?ue:he,"utf8"),o?.succeed();let g=V("Installing dependencies...")?.start(),m=await k(t),u=[...gt,e.style==="new-york"?"@radix-ui/react-icons":"lucide-react"];await ft(m,[m==="npm"?"install":"add",...u],{cwd:t}),g?.succeed()}import{Command as vt}from"commander";import xt from"path";import wt from"fs-extra";function ze(){let t=xt.join("package.json");return wt.readJSONSync(t)}process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function Ct(){let t=await ze(),e=new vt().name("shadcn-ui").description("add components and dependencies to your project").version(t.version||"1.0.0","-v, --version","display the version number");e.addCommand(Ie).addCommand(fe).addCommand(ge),e.parse()}Ct();
//# sourceMappingURL=index.js.map
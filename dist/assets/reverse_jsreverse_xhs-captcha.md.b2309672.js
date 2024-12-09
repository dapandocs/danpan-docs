import{_ as l,a as p}from"./chunks/CopyRight.vue_vue_type_script_setup_true_lang.67549825.js";import{_,C as d,o as h,c as i,H as e,w as s,Q as u,k as t,a}from"./chunks/framework.27021b64.js";import{_ as m}from"./chunks/index.e5e15ed4.js";import"./chunks/CloseOutlined.9c3246b4.js";import"./chunks/isObjectLike.46b91259.js";import"./chunks/Serializer.fad5b415.js";import"./chunks/LeftOutlined.9040821c.js";import"./chunks/EyeOutlined.53cc40ff.js";const D=JSON.parse('{"title":"xhs 旋转验证码剖析和协议算法实现","description":"","frontmatter":{},"headers":[],"relativePath":"reverse/jsreverse/xhs-captcha.md","filePath":"reverse/jsreverse/xhs-captcha.md","lastUpdated":1719219394000}'),f={name:"reverse/jsreverse/xhs-captcha.md"},g=u('<h1 id="xhs-旋转验证码剖析和协议算法实现" tabindex="-1">xhs 旋转验证码剖析和协议算法实现 <a class="header-anchor" href="#xhs-旋转验证码剖析和协议算法实现" aria-label="Permalink to &quot;xhs 旋转验证码剖析和协议算法实现&quot;">​</a></h1><blockquote><p>【作者主页】：<a href="https://blog.csdn.net/studypy1024" target="_blank" rel="noreferrer">小鱼神1024</a></p><p>【擅长领域】：JS逆向、小程序逆向、AST还原、验证码突防、Python开发、浏览器插件开发、React前端开发、NestJS后端开发等等</p></blockquote><blockquote><p>本文章中所有内容仅供学习交流使用，不用于其他任何目的，不提供完整代码，抓包内容、敏感网址、数据接口等均已做脱敏处理，严禁用于商业用途和非法用途，否则由此产生的一切后果均与作者无关！若有侵权，请联系作者立即删除！</p></blockquote><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>作为小红书的忠实粉，即使没有几个粉丝，也不知不觉用了好几年了。最近发现老是出现旋转二维码验证，令我十分不爽，于是就想着研究一下这个验证码的实现原理。</p><h3 id="请求分析" tabindex="-1">请求分析 <a class="header-anchor" href="#请求分析" aria-label="Permalink to &quot;请求分析&quot;">​</a></h3><p>当旋转验证码页面加载完成后，请求分析时，发现 <code>/api/redcaptcha/v2/captcha/register</code> 这个网络请求，从字面意思上看，应该是它了。</p><p>打开其响应信息发现，并没有验证码的图片信息。而是有个 <code>captchaInfo</code> 加密字符串。我们猜测，这个字符串应该就是验证码的图片信息。</p>',8),x=t("p",null,[a("老套路，全局搜索 "),t("code",null,"captchaInfo"),a(" 关键字，发现并没有这个字段。此时，心里大概有数了，要么这个字段被加密了，要么这个字段被混淆了。")],-1),b=t("p",null,"换个思路，我们可以从这个请求的堆栈中找线索。如图：",-1),v=t("p",null,"点击第一个进去，打上断点后，如图：",-1),k=t("p",null,[a("此时发现了，请求响应的内容，继续沿着堆栈分析，发现它跳转到了 "),t("code",null,"main.6fb1333.js"),a(" 中")],-1),q=t("p",null,[a("读过我之前发布的 "),t("a",{href:"https://blog.csdn.net/studypy1024/article/details/139812528",target:"_blank",rel:"noreferrer"},"x-s、x-t、x-s-common、x-b3-traceid 参数分析"),a(" 这篇博客的小伙伴应该知道，这个就是 "),t("code",null,"JSVMP"),a(" 加密。")],-1),C=t("p",null,[a("既然是熟悉的味道，那还用熟悉的配方去分析 -- "),t("code",null,"插桩法"),a("。")],-1);function P(S,y,T,N,V,$){const c=m,o=d("ClientOnly"),n=l,r=p;return h(),i("div",null,[g,e(o,null,{default:s(()=>[e(c,{src:"/images/captcha/xhs/1.png",alt:"vscode-debugger-1"})]),_:1}),x,b,e(o,null,{default:s(()=>[e(c,{src:"/images/captcha/xhs/2.png",alt:"vscode-debugger-1"})]),_:1}),v,e(o,null,{default:s(()=>[e(c,{src:"/images/captcha/xhs/3.png",alt:"vscode-debugger-1"})]),_:1}),k,e(o,null,{default:s(()=>[e(c,{src:"/images/captcha/xhs/4.png",alt:"vscode-debugger-1"})]),_:1}),q,C,e(o,null,{default:s(()=>[e(n)]),_:1}),e(o,null,{default:s(()=>[e(r)]),_:1})])}const E=_(f,[["render",P]]);export{D as __pageData,E as default};
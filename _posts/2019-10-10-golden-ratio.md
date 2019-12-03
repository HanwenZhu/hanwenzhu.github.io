---
layout: post
title: Golden Ratio
description: An Investigation of Mathematical Relationships
category: math
excerpt_separator: "\0"
---

{%- katexmm -%}

Harmony creates beauty. One way harmony is achieved is through a symmetry across different aspects: a symmetry about an axis, a rotational symmetry, etc. In this particular article, we will discuss the symmetry across *hierarchies*: that, when a whole is cut neatly into two parts, the relationship between the whole and one part is symmetrical to the relationship between that part and the other part.

We will formally define the whole as a segment (although any positive real number will do) and this relationship as the *ratio* between the lengths of two segments. We obtain a segment of length $1$, and the nonnegative $x$ and $y$ are respectively the first and second part, with $x+y=1$.

Now we apply the constraints of symmetry: the first ratio is $1/x$ and the second is $x/y$; so the symmetry tells us that
$$\frac{1}{x} = \frac{x}{y}.$$

Rearranging, we get
$$
  \begin{aligned}
    x^2&=y=1-x \\
    x^2&+x-1=0 \\
    x&=\frac{-1\pm\sqrt{5}}{2}
  .\end{aligned}
$$

(Recall the formula that solves quadratic equations.)

Since lengths can't be negative, $$x=\frac{-1+\sqrt{5}}{2}\approx0.6180339887\cdots.$$

Also, we define $$\varphi=\frac{1}{x}\approx1.6180339887\cdots$$ and $$\phi=-x\approx-0.6180339887\cdots$$ to be the <dfn>golden ratios</dfn>.

---

Now, from the properties above, we can see that
$$x=\frac{x}{1}=\frac{1-x}{x}=\frac{1}{x}-1,$$
which is to say,
$$\varphi=1+\frac{1}{\varphi}.$$

If we substitute $\varphi$ into the denominator on the right-hand side, we have
$$\varphi=1+\frac{1}{1+\frac{1}{\varphi}}.$$

Again, repeating the process, we have
$$
  \begin{aligned}
    \varphi&=1+\frac{1}{1+\frac{1}{1+\frac{1}{\varphi}}} \\
    &=1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac{1}{\varphi}}}} \\
    &=1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac{1}{\ddots}}}}}.
  \end{aligned}
$$

Also, with the same process, we can use the fact that $\varphi=\sqrt{1+\varphi}$ to see
$$
  \varphi=\sqrt{1+\sqrt{1+\sqrt{1+\sqrt{1+\sqrt{1+\cdots}}}}}
.$$

The same two facts can be said about $\phi$, just except that the $+$ sign is converted to $-$ in the second equation.

---

Another symmetry across hierarchies that exists recursively (*i.e.*, the parent to the primary part is the primary part to the secondary part) is the <dfn>Fibonacci sequence</dfn>. It is defined as $F_0=0$, $F_1=1$, and $F_{n}=F_{n-1}+F_{n-2}$ for any other natural $n$. The first terms in the sequence are
$$0,1,1,2,3,5,8,13,21,34,55, \mathrm{etc.}$$

The symmetry exists by defining the relationship as the *definitions* of the two terms compared. Consider the relationship between $F_n$ and $F_{n+1}$. $F_{n+1}$ is the sum of two numbers, $F_n$ and $F_{n-1}$, and the first part $F_n$ is also the sum of two numbers, $F_{n-1}$ and $F_{n-2}$. The whole $F_{n+1}$ contains the primary part $F_{n}$ just as how the primary part $F_{n}$ contains the secondary part $F_{n-1}$.

Now, it would be interesting to use our original concept of relationship, the ratio, here. It is easy to see that $F_{n+1}/F_{n}$ changes for every $n$, but as $n$ increases they get closer to a number, to wit, $\varphi$. To encapsulate this mathematically, we will show that $\lim_{n\to\infty}F_{n+1}/F_{n}=\varphi$. Let
$$
  r=\lim_{n\to\infty}\frac{F_{n+1}}{F_{n}}
.$$

We have
$$
  \begin{aligned}
    r &= \lim_{n\to\infty}\frac{F_{n+1}}{F_{n}} \\
    &= \lim_{n\to\infty}\frac{F_{n}+F_{n-1}}{F_{n}} \\
    &= \lim_{n\to\infty}\frac{F_{n-1}}{F_{n}}+1 \\
    &= \lim_{n\to\infty}\frac{F_{n}}{F_{n+1}}+1 \\
    &= \left(\lim_{n\to\infty}\frac{F_{n+1}}{F_{n}}\right)^{-1}+1 \\
    &= \frac{1}{r}+1
  .\end{aligned}
$$

$r=1+1/r$ was exactly what we saw with $\varphi$ and $\phi$! Since $r>0$, it is apparent that $r=\varphi$.

---

Most math concepts are connected by "buried roots", whether discovered or not. These unexpected links between wildly different concepts (the Fibonacci sequence and the golden ratio) caused by very deep connections underneath the surface (that the whole to a part is just that part to the other part) is what makes math so exciting and such a subject worth devoting to.

{%- endkatexmm -%}

---
layout: post
title: What Are Rings?
description: A Generalization of What We Call Numbers
category: math
excerpt_separator: "\0"
---

{%- katexmm -%}

Ancient people invented math and numbers to count. It was a way to facilitate communication by pointing out *how many*, not just *how much*.

For an effective math system, this kind of great ideas should better be generalized. Generalization makes it easier for mathematicians to make a new, similar, but slightly different system, while minimizing mistakes. It's sort of like how a generalization of different recipes of coffees helps us make a new kind of coffee, since you've alrightly got a blueprint of all coffees.

So, how are we going to generalize numbers? Remember, it's us who are creating the game, so let's create the game rules first. Let's start from the basics where the ancient people started.

First off, you've got to have nothingness. Let's denote that by $0$, or more commonly <dfn>zero</dfn>. If you have $0$ dollars, well, you have nothing.

Then, you have to have somethingness. Be careful: while all nothingnesses are essentially the same $0$, somethings are not. You can have $3$ and $5$ both being something but $3\neq5$.

So, let our most special something be $1$, representing a whole thing. If you have $1$ apple, you have a whole apple, not more or less of it.

To formalize, let's first define our operations. If there are two numbers $a$ and $b$, adding them up yields a whole new number $a+b$. Similarly, multiplying them up yields a new number $ab$. Sometimes it's denoted $a\times b$ or $a\cdot b$.

Then we have the following three game rules. For any number $a$ and $b$,
* $a+b=b+a$ and $ab=ba$.
* $a+(b+c)=(a+b)+c$ and $(ab)c=a(bc)$.
* $a(b+c)=ab+ac$.

Wait, what about subtraction and division? For subtraction, $a-b$ is essentially just $a+(-b)$ (we'll talk about negation of some number $b$ to $-b$ later). For division, it actually requires a whole bunch of interesting but rather long ideas that will be out of the scope of this article.

Back onto negation. For any $a$,
* There exists another number which should be called $-a$, such that $a+(-a)=0$, where $0$ is nothingness.

Intuitively, this means that the negation of $a$ is how much $a$ will need to reach back to nothing. If you have an apple ($1$), you need to lose an apple ($-1$) to reach nothing ($1+(-1)=0$).

The next two game rules involve nothing, $0$, and the fabric of something, $1$. For any $a$,
* $a+0=a$.
* $a\cdot 1=a$.

The game rules are set! Let us give them random, fancy names.

1. **Commutativity.** $\forall a,b, \quad a+b=b+a$ and $ab=ba$.
2. **Associativity.** $\forall a,b,c, \quad a+(b+c)=(a+b)+c$ and $(ab)c=a(bc)$.
3. **Distributivity.** $\forall a,b,c, \quad a(b+c)=ab+ac$.
4. **Negation.** $\forall a,\exists {-a}, \quad a+(-a)=0$.
5. **Additive Identity.** $\exists 0,\forall a, \quad a+0=a$.
6. **Multiplicative Identity.** $\exists 1,\forall a, \quad a\cdot 1=a$.

Just to shorten the rules, the upside-down $\forall$ means "for **A**ny", and the inverted $\exists$ means "there **E**xists".

Any *math system*, or a bunch of numbers, that satisfy all these six rules, should be called a <dfn>ring</dfn>.

---

Of course, just reading these kind of manuals won't help us master our number world. We'll have to explore on our own what these rules can do for us, or in this case, what the rules can prove for us. For example, let us try to prove that $$a\cdot 0=0$$ for any $a$. Remembering from Rule 5 that $0+0=0$, we can substitute the $0$ in the equation to $0+0$:
$$
    \begin{aligned}
      a\cdot 0 &= a\cdot(0+0) \\
               &= a\cdot0+a\cdot0
    .\end{aligned}
$$
The last line works by Rule 3., distributivity. Now we can safely subtract both sides by $a\cdot0$:
$$
    \begin{aligned}
      a\cdot 0 + (-a\cdot0) &= a\cdot0+a\cdot0 +(-a\cdot0) \\
                          0 &= a\cdot0
    .\end{aligned}
$$

The last line is because of Rule 4. There we have it!

---

Remember, people will exploit your game rules. Consider this equation:
$$ 0=1. $$
Nothing is in fact something! It's obviously wrong, right?

However you may not like it, it *can* be right. In this case, since Rule 6 says $a\cdot 1=a$ for *any* $a$, by substituting $0$ for $1$, we have
$$
    \begin{aligned}
      a\cdot 0 &= a
    ,\end{aligned}
$$
but by the theorem we have proven above, $a\cdot 0=0$, which means $a=0$! This is very important, since we are considering *any* $a$. So the whole ring is essentially one thing---nothing! In this case, *if* it happens that $0=1$, we call the ring a *zero ring*.

---

So, rings are essentially this wierd intermediate concept between what we know as actual, real numbers and complete chaos. Its game rules capture the essence of being a number (or at least most of it), while allowing for some degree of freedom (remember, $0$ might be equal to $1$; and some other wierd interesting equations like $0=2$ give rise to complete *fields* of math---a topic for another day). These kind of thoughts are called *generalizations*. Rings are one of the best generalizations of numbers as we know them, and are very crucial as a foundation of modern algebra.

{%- endkatexmm -%}

---
title:  "Mahler-Popken Complexity"
mathjax: true
layout: post
categories: media
---

## MathJax

[Mahler-Popken complexity](https://en.wikipedia.org/wiki/Integer_complexity) maps the smallest number of ones that can be used to represent it using ones and any number of additions, multiplications, and parentheses. It is defined by the following recursive function:

$ C(n) = \min \left( \left\{ C(d) + C\left(\frac{n}{d}\right) \mid d \mid n, 1 < d < n \right\} \cup \left\{ C(i) + C(n-i) \mid 1 \leq i < n \right\} \right) $
## Code

The naive implementation of the function is simple and uses the following Python code:

{% highlight python %}

from math import sqrt, ceil, log

costs = [1, 1]
calculations = ["0", "1", "1+1", "1+1+1", "2*2", "2+3"]

number = int(input("Enter any number: "))

def multiply(x):
    factors = []
    for i in range(2, x // 2 + 1):
        if x % i == 0:
            factors.append(i)

    min_cost = x
    calculation = x
    for i in range(len(factors)):
        if costs[factors[i]] + costs[factors[len(factors) - 1 - i]] < min_cost:
            min_cost = costs[factors[i]] + costs[factors[len(factors) - 1 - i]] # basic op 1
            calculation = f"{factors[i]}*{factors[len(factors) - 1 - i]}"

    return min_cost, calculation

# def fibonacci(x):
#     fib = [1, 1]
#     for i in range(2, number + 1):
#         if i == fib[len(fib) - 1] + fib[len(fib) - 2]:
#             fib.append(i)

#     if x > 1 and x in fib:
#         return costs[fib.index(x)] + 4, f"F({fib.index(x)})"
#     else:
#         return x, x

# def successor(x):
#     return costs[x - 1] + 1, f"S({x - 1})"

def add(x):
    min_cost = x
    calculation = x
    for i in range(1, x // 2 + 1):
        if costs[i] + costs[x - i] < min_cost:
            min_cost = costs[i] + costs[x - i] # basic op 2
            calculation = f"{i}+{x - i}"

    return min_cost, calculation

# def pred(x):
#     min_cost = x
#     calculation = x
#     for i in range(x, 0, -1):
#         if costs[i] + 1 < costs[i-1]:
#             costs[i-1] = costs[i] + 1
#             calculations[i-1] = f"P({i})"
#     return min_cost, calculation

# def subtract(x):
#     min_cost = x
#     calculation = x
#     for i in range (x, 0, -1):
#         for j in range (i, 0, -1):
#             if costs[i] + costs[j] < costs[i-j]:
#                 costs[i-j] = costs[i] + costs[j]
#                 calculations[i-j] = f"{i}-{j}"
#     return min_cost, calculation
    

# def exponent(x):
#     powers = []
#     for base in range(2, ceil(sqrt(x)) + 1):
#         for expo in range(2, int(log(x, base)) + 2):
#             power = base**expo
#             if power == x:
#                 powers.append(base)
#                 powers.append(expo)

#     min_cost = x
#     calculation = x
#     for i in range(0, len(powers), 2):
#         if costs[powers[i]] + costs[powers[i + 1]] + 1 < min_cost:
#             min_cost = costs[powers[i]] + costs[powers[i + 1]] + 1
#             calculation = f"{powers[i]}^{powers[i + 1]}"

#     return min_cost, calculation


# def binary(x):
#     return len(bin(x)[2:]) + 7, bin(x)[2:]


def main():
    for j in range(2, number + 1):
        costs.append(3*j - 1)
        if (j >= 5):
            calculations.append(j)

    function_list = [multiply, add]
    for j in range(1, number + 1):
        min_cost = costs[j]
        calculation = calculations[j]
        for f in function_list:
            y, c = f(j)
            if y < min_cost:
                min_cost = y
                calculation = c

        costs[j] = min_cost
        calculations[j] = calculation
     
    max_width_number = max(len(str(number)), len('Number'))
    max_width_cost = max(max(len(str(cost)) for cost in costs), len('Cost'))
    max_width_calculation = max(max(len(str(calculation)) for calculation in calculations), len('Calculation'))
    
    print(f"{'Number'.ljust(max_width_number)} {'Cost'.ljust(max_width_cost)} {'Calculation'.ljust(max_width_calculation)}")

    for i in range(0, number + 1):
        print(f"{str(i).ljust(max_width_number)} {str(costs[i]).ljust(max_width_cost)} {str(calculations[i]).ljust(max_width_calculation)}")

if __name__ == "__main__":
    main()

{% endhighlight %}

## Gists

With the `jekyll-gist` plugin, which is preinstalled on Github Pages, you can embed gists simply by using the `gist` command:

<script src="https://gist.github.com/5555251.js?file=gist.md"></script>

## Embedded content

You can also embed a lot of stuff, for example from YouTube, using the `embed.html` include.

{% include embed.html url="https://www.youtube.com/embed/RdnTi-2gahs" %}

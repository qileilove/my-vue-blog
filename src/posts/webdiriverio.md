---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh                              # Lang is required
author: 
title: Javascript自动化测试WebDriverIO
description: 
excerpt: 
cover: true
coverAlt: /home.jpg
demo: 
categories:
  - automation test
tags: 
  - Agile_QA
  - Agile testing
  - QA
  - automation test
created_at: 2019-08-20 09:00
updated_at: 2019-08-20 09:00
meta:
                                     # If you have cover image
  - property: og:image
    content: /autores/my.jpeg
  - name: twitter:image
    content: /autores/my.jpeg
---

# Javascript自动化测试WebDriverIO

您是否在寻找使用JavaScript进行编程的Selenium的自动化测试框架？

如果是这样，您可以看看WebdriverIO。 

## Selenium JavaScript Bindings？
您可能会问的第一个问题是，“为什么不使用Selenium JavaScript Bindings ？”

嗯，如您所知，Selenium只是一个API，需要您自己创建自动化框架的所有部分。

Christian（webdriverIO的作者）说，WebdriverIO为您提供了一个完整的框架。 它不需要你像Selenium一样从头开始实现一堆东西。

它提供了构建可扩展和可持续测试套件所需的一切。

它还具有Selenium版本中没有的额外功能。

Kevin解释说，WebdriverIO的主要好处是它就像SeleniumJS的结合。 它采用了这一基本理念，并通过大量功能，插件和更多功能使其更容易开始测试。

它自动处理建立真实测试框架的所有样板。

## 更简单的Selenium语法
与我谈过的关于WebdriverIO的每个人都提到使用它编写测试是多么简单。

根据Larry的说法，WebdriverIO非常聪明。 例如，使用常规Selenium WebDriver，您可以通过CSS或ID或名称或部分文本来“查找元素”。

使用WebdriverIO，它只是一个简单的driver.click元素，在任何背景中，它将根据您传递的定位器使用的元素来决定。

因此，如果它是一个CSS，一个部分文本或XPath，它可以自己解决它。

Kevin同意并且还提到了其他基于Selenium的工具，但要使用那些你必须了解Python，Ruby或Java的工具。 与您在WebDriverIO脚本中查看的内容相比，这些语言非常冗长。

WebdriverIO的优点在于它的语法非常简洁。

## 那么WebDriverIO提供的其他功能有哪些呢？
### Shadow Doms支持
构建在软件开发中变得流行的Web组件的趋势之一是使用Shadow Doms。

对于自动化这可能是棘手的，因为这种技术允许隐藏的DOM树与标准DOM中的元素相关联，这意味着许多元素不可用于创建“点击”类型的脚本。

随着WebdriverOP v5.5.0的发布，它现在包含对阴影 Dom的内置支持 ，其中包含两个新引入的命令shadow $和shadow $$。

```
Shadow $ - 此函数使您可以访问给定元素的ShadowRoot中的元素。

shadow $$ - 此函数使您可以访问给定元素的ShadowRoot中的元素
```

Larry说这是他喜欢使用WebdriverIO的主要原因之一。

## JavaScript测试生态系统
Kevin还指出，WebdriverIO具有出色的插件和服务生态系统，可让您轻松添加服务和插件。

它还有一个很好的安装程序，为您提供了添加不同框架和内置支持其他第三方工具的选项。

例如，在安装过程中，您可以选择要使用的框架：

- Mocha

- Jasmine

- Cucumber





（**根据Christian的说法，最常用的框架是Mocha，但基于twitter pool，Cucumber实际上是最受欢迎的框架。）

### 报告部分使用什么：

Allure Reporter

Concise Reporter

Dot Reporter

Junit Reporter

Spec Reporter

Sumologic Reporter

Report Portal Reporter

Video Reporter

HTML Reporter

JSON Reporter

Mochawesome Reporter

Timeline Reporter

--- 服务使用什么？

Appium Service

Applitools Service

BrowserStack Service

Crossbrowsertesting Service

Devtools Service

Firefox Profile Service

Sauce Labs Service

Selenium Standalone Service

Static Server Service

Testingbot Service

ChromeDriver Service

Intercept Service

Zafira Listener Service

Report Portal Service

Docker Service



只需单击鼠标，您就可以安装并运行您喜欢的配置而无需执行任何其他操作。

除了易于安装之外，您还可以获得一些不错的调试功能，如监视模式和调试命令。

## 观察模式
另一个很酷的功能是观察模式。

使用测试运行器，您可以在处理文件时查看文件。 如果您更改应用程序或测试文件中的某些内容，它们会自动重新运行。

通过在调用WebDriver.io命令时添加监视标志，测试运行程序将在运行所有测试后等待文件更改。

## 调试命令
使用debug命令，可以在运行时停止执行并暂停测试。 暂停将使浏览器保持打开状态，这很酷，因为您可以查看浏览器并检查元素。

查看页面上可以实时交互的所有可用元素很有帮助。 然后，您可以从终端本身发出命令，以便在将它们添加到脚本之前进行尝试。

## 对QA和Devs有好处
Kevin是一名开发人员，他也相信这个框架对于测试人员来说是个不错的选择。

对于QA人员，我认为使用带有WebdriverIO的JavaScript对于QA人员来说比Java更容易。 即使你所教的人熟悉编程，试图弄清楚Java以及它们如何工作也是非常复杂的。

JavaScript有一个更容易学习的曲线; 与其他语言相比，它看起来肯定更简单。

我也推荐它用于前端开发人员，因为他们不必学习不同的语言来使用它。





## 社区怎么样？
在选择任何开源工具时，确保项目处于活动状态并且人们正在开展工作至关重要。

没有社区的项目是非常危险的。

对于Christian来说，他在WebdriverIO社区中最为自豪的是项目背后的团队。

例如，有一个Gitter支持渠道 ，成千上万的人经常互相帮助。 因此，无论何时您有问题，都有人可以帮助您，反之亦然。

选择开源工具时另一个有用的指标是它的受欢迎程度。 它越受欢迎，人们可能做出的贡献越多，工具保持增长的可能性就越大。

查看下载数据，到目前为止， Selenium仍然比WebdriverIO更受欢迎。 Cypress.io也越来越多地进入自动化领域。

但除了这两个例外，WebDriveior是JavaScript领域中最受欢迎的框架。


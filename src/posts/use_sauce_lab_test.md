---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh                              # Lang is required
author: 
title: 使用Sauce Labs进行页面性能测试与监控
description: 
excerpt: 
cover: true
coverAlt: /home.jpg
demo: 
categories:
  - automation test
  - performance test
tags: 
  - Agile_QA
  - Agile testing
  - QA
  - automation test
  - performance test
created_at: 2019-08-16 09:00
updated_at: 2019-08-16 09:00
meta:
                                     # If you have cover image
  - property: og:image
    content: /autores/my.jpeg
  - name: twitter:image
    content: /autores/my.jpeg
---

## 使用Sauce Labs进行页面性能测试与监控

在过去的一个月里，我研究了关于Sauce Labs的一个很酷的新功能，该功能有助于前端应用的性能。

以下将是我最近的研究,在我们谈论性能测试时，大多数人都会想到压力和负载测试，这涉及到测量后端系统的响应。

现在已经有很多很棒的工具可以用来加载测试应用程序，但是Sauce的解决方案是专门为前端性能测试设计的。

### 为什么需要这个？

现在许多现代应用程序都使用JavaScript框架，如React和AngularJS这样的前端库。这些功能丰富的前端库添需要增加一层对应的度量标准帮助我们监控性能。

因此，在本地机器上度量正在测试的应用程序的呈现时间变得至关重要。
![qa](https://upload-images.jianshu.io/upload_images/3732075-0aabd5c73f0fd0a3.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/301/format/webp)


### 您可以获得什么样的性能数据？
Sauce能够访问与Chrome浏览器其他并行连接。 他们通过控制chrome driver和Chrome本身之间的通信来实现这一点。

这使得他们可以开始跟踪浏览器，并从Chrome中获取浏览器引擎中发生的任何事情的所有信息。

然后，他们使用谷歌提供的工具，如Lighthouse，来解析这些所有的数据。

因为跟踪日志数据可能有大量的有效负载(有时高达10兆字节)，而不使用诸如Sauce之类的东西，您可能无法使用它们。

Sauce将扫描日志，以便您轻松读取所需性能指标。

### 你可以用sauce性能测量什么？
新的Sauce性能功能几乎可以捕获所有JavaScripts呈现指标，包括：

- Performance Score - 提供性能指标的加权平均值，有助于跟踪团队进度。

- Page Load Time - 显示页面何时完全加载（或浏览器正式触发onload事件时）。

- Speed Index - Google定义的页面的视觉完整性。

- Estimated Input Latency - 输入响应性是用户如何感知应用程序性能的关键因素。

- Time to First Byte -   从服务器、相关应用程序缓存或本地资源接收响应的第一个字节之前所花费的时间。

- Time to First Paint - 这是第一次在场景中绘制像素点的时间。这个指标不包括默认的背景色，但包括任何用户定义的背景色。

- Time to First Contentful Paint - 当绘制任何内容（文档对象模型中定义的对象）时，将触发第一个内容绘制。 这可以是文本，图像或画布渲染。

- Time to First Meaningful Paint - 第一个有意义的绘画是浏览器提供的指标，用于衡量在网站上完全呈现最有意义的内容所需的时间。 它相当于第一个内容绘画，并描述了浏览器首次渲染任何文本，图像（包括背景图像），非白色画布或SVG之前的持续时间。 这包括具有挂起的Web字体的文本。 这是用户可以开始使用页面内容的第一个时刻。

- Time to Interactive - 从导航开始到布局稳定，Web字体可见，页面响应用户输入的秒数。 如果没有任务阻塞至少50毫秒，页面将稳定。

- Time to First CPU Idle - CPU处理所有页面信息所需的时间。

- DOM Content Loaded - 在完全加载和解析初始HTML文档时，将触发加载DOM内容的事件，而无需等待样式表，图像和子帧完成加载。 应该仅使用非常不同的事件加载来检测完全加载的页面。 将DOM内容加载更合适时，将加载时间用作性能指标是一个流行的错误。

（*这些定义的参考资料来自 Google Lighthouse Docs 和 FireFox Developer docs.)


虽然服务器端因素影响这些度量，但是如果您能够隔离它们并随着时间的推移度量它们，那么您可以捕获这些增量。

这可以让您了解应用程序加载和呈现的速度。

您还可以编写代码来检查您没有超出以前的基准测试。

它还提供了基于lighthouse计算的性能评分，这是使用基本Selenium WebDriver通常无法获得的数据。

![qa](https://upload-images.jianshu.io/upload_images/3732075-366a51ba084317eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/749/format/webp)


### 如何在Selenum测试中添加sauce lab性能测试
要在Sauce Labs中开始捕获性能值，您需要做的就是为现有的WebDriver测试添加两个新功能。

extendedDebugging：true，

capturePerformance：true，

### 没有sauce lab话，我需要非常麻烦的进行这方面的测试

要在过去做到这一点，我必须创建一个WinRunner脚本。然后，我必须添加一个循环计时器函数，等待元素出现在应用程序中。

然后，我将它添加到LoadRunner控制器中，并使用HTTP Vuser协议对系统加载。然后，WinRunner脚本将作为GUI Vuser在客户机上运行，并保持本地呈现时间的计时。

当然，这并不准确，但在当时，这是我实现这个功能的唯一方法。如果我以前有sauce lab，我就能省下很多时间。

![qa](https://upload-images.jianshu.io/upload_images/3732075-ee2a171ed1cfabcf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp)

### 为什么这很酷

是它与负载和压力测试没有特别的关系; 事实上，它是故意不考虑它们的。

当遇到性能下降的情况时，我们不可避免地会在用户的行为中感觉到性能下降。

此时，大多数测试人员所做的第一件事就是运行一个负载和压力测试，认为这是一个性能问题。但是无论您只是使用几个节点进行热身，还是运行500个节点，都会发生这种行为。

它不是线性增长;它仍然是静态的。

这可能会让你说“哦，天哪。这意味着UI中有些东西发生了变化。例如，有人引入了一些运行时间很长的DOM元素，或者有人增加了图像的大小，等等。

当我们看到性能问题时，我们倾向于运行负载和压力测试，而不理解它实际上是一个UI问题。

使用此工具，您可以避免开销，并使用它不仅帮助诊断UI问题，还可以在您特别关心的页面上输入性能，然后随着时间的推移注意该页面上的性能是否发生了变化。

### 你为什么要关心前端性能？
有一个搜索引擎优化 （SEO）的B2C网站，每天有数百万的点击量。

他们有大约1万个关键词排名第一。

后来有一天，谷歌引入了一种名为Panda的算法，它改变了谷歌对其搜索机器人查看web内容的方式进行索引的方式。

在改变之前，他们综合考虑了反弹率和相关性等因素。在Panda中，他们开始比以前的算法更重视页面性能。

有一天突然这个网站排名开始下降。

花了几个月的时间通过Lighthouse来检查他们的页面表现如何。

如果他们当时就有了这个特性，并在Selenium脚本的旁边运行，他们就会立即知道页面加载何时开始变慢，并且不会受到如此巨大的SEO损失。

因此，如果您在零售或银行业或某些BTC中搜索引擎优化是至关重要的，那么在测试中运行这些测试是非常宝贵的。

### 另外一个基于性能的测试工具叫做Speedo。
Speedo是一个NodeJS包，使您能够直接从命令行在Sauce上运行性能测试。

Speedo旨在帮助团队开始进行性能测试，因此它的设计易于使用，并且可以处理与运行前端性能测试和验证性能回归相关的复杂性。

Speedo可轻松集成任何CI / CD系统，这是将Sauce Performance插入CI / CDpipeline 并开始捕获性能的绝佳方式。

如果您有使用Sauce Labs的企业计划并且正在使用Chrome（截至目前，性能指标只能在Google Chrome上捕获），则需要查看此新功能。

当然以上是和sauce labs 服务强绑定  有没有基于开源的免费的工具？

当然没有。。。。 但是我们可以进行二次开发 自己在脚本中收集所需数据 拿 python selenium 举个栗子


``` 
''' Loosely based on the example code in http://www.obeythetestinggoat.com/

how-to-get-selenium-to-wait-for-page-load-after-a-click.html

'''

'''

Import the necessary packages required for execution

'''

from selenium import webdriver

''' Chrome web driver interface

'''

hyperlink = "http://lambdatest.com"

driver = webdriver.Chrome()

driver.get(hyperlink)

''' Use Navigation Timing  API to calculate the timings that matter the most ''' 

navigationStart = driver.execute_script("return window.performance.timing.navigationStart")

responseStart = driver.execute_script("return window.performance.timing.responseStart")

domComplete = driver.execute_script("return window.performance.timing.domComplete")

''' Calculate the performance'''

backendPerformance_calc = responseStart - navigationStart

frontendPerformance_calc = domComplete - responseStart

print("Back End: %s" % backendPerformance_calc)

print("Front End: %s" % frontendPerformance_calc)

driver.quit()
``` 

我们可以看到其实我们在脚本中 调用了一些浏览器对外暴露的接口 来实现性能监控,然后可以利用图表进行展示，当然如果有时间精力，完全可以自己做一套定制化的服务。

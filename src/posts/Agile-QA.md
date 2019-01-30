---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh                              # Lang is required
author: 
title: QA请勿忘初心
description: 
excerpt: 
cover: true
coverAlt: /home.jpg
demo: 
categories:
  - Agile QA
tags: 
  - Agile_QA
  - Agile testing
  - QA
created_at: 2016-08-22 09:00
updated_at: 2016-08-22 09:00
meta:
                                     # If you have cover image
  - property: og:image
    content: /autores/my.jpeg
  - name: twitter:image
    content: /autores/my.jpeg
---

## 首先让我们回顾一下QA与QC的区别：

**Quality Assurance** :The planned and systematic activities implemented in a quality system so that quality requirements for a product or service will be fulfilled.
**Quality Control** :The observation techniques and activities used to fulfill requirements for quality.

QA的工作涉及软件研发流程的各个环节，且涉及到每一位参与研发的人员，但质量保证工作又不涉及具体的软件研发细节，侧重于整个流程。

QC则侧重于点，利用各种方法去检查某个功能是否满足业务需求。

thoughtworks 的QA则是这两者的混合体，你既要保证开发流程的质量，又要保证story的功能的是否正确。

---

来thoughtworks已经2年了，当过bqconf讲师与主持，参加过公司内各类测试相关活动，也阅读过g邮件中分享的关于test的话题，大部分人关注点都离不开自动化测试，面试的QA也说想到thoughtworks来学习高深的自动化测试，仿佛自动化测试代表了整个QA界，我反对盲目的自动化测试，确切的说反对盲目的UI自动化测试。很多QA在自动化测试海洋里迷失了自己。
我要强调自动化测试: 真的没有银弹。

![](/images/QA_TW.jpg)

## QA的最终价值体现

**Faster Delivery Of Quality Software From Idea To Consumer**

### 确保项目的正确性

所以自动化测试只是其中的一小部分。
如上图顶部和底部的文字是对一个QA所能带给项目的总结：“我们在开发正确的产品吗？如果是，那么我们开发的产品正确吗？”所以QA首先需要在整个个项目过程中不断询问的所有成员上述问题，确保团队是在开发客户所需的产品，而不是自己YY出来的产品。
### 确保流程的正确性

**Quality is not just in the software but also in the process**

质量从来都不只是QA的职责，而是整个团队的职责。但QA如果自己都不注重，不督促组内成员改进质量，再将责任强加于整个团队，那么产品质量又何谈提升与保证。
中间的图片从一个QA的角度表明了一个用户故事的生命周期以及QA如何参与其中每个环节。

![](/images/pair_with_BA.png)
首先BA和客户将要开发的story列出之后，BA与QA可以一起pair编写具体story的内容，场景与验收条件,利用自己对业务以及系统的熟悉度，尽量的配合BA将story中坑尽量排除掉。

![](/images/kick_off.png)
所有参与kick off 角色，都应该提前了解story内容。在kick off过程中，提出自己对story疑问。尽量将业务需求上问题在这个阶段解决。
![](/images/pair_with_dev.png)
在完成kick off后，QA可以和dev一起pair完成编写unit test 以及Automated Acceptance Tests，身为一个敏捷QA，我们起码要了解团队选用的单元测试工具，熟悉项目的技术架构，这样更好的便于我们对整个项目质量把控，在与dev pair的过程中，即帮助dev分析业务场景的分支，来确保单元测试覆盖的是正确的场景，而不是为了交代上级随便乱写的单元测试，也帮助QA熟悉代码，提高编码能力。
![](/images/sign_off.png)
当DEV完成编码工作后，这时QA UX BA DEV一起检查story，是否按照story AC来检查是否完成对应的功能。UX也可发表对story UI以及交互一些看法，有任何问题及时讨论后，将问题尽早的反馈给客户。
![](/image/test_test.png)
当开发交付一部分功能之后，QA就可以做常规的用户故事测试，几个迭代之后，QA开始进行跨功能需求测试和探索性测试等。根据探索性测试的结果，QA可能会调整测试策略，调整测试优先级，完善测试用例等等。
![](/images/report.png)
上面这些QA实践貌似已经很完美,其实还差最重要的一环 **quality analysis** 。每次release后，我们总以为我们发布一个完美的产品，但却总能在新迭代开发过程中发现之前问题，历史总是惊人的相似，为什么，没有分析总结问题，以及相应的预防手段,那么同样的问题只会重现。
同时我们也要回顾下自己在工作中真的将这些敏捷实践都应用到工作中吗，我想或多或少的都有所欠缺。对于一个QA来说，不应循规蹈矩照搬敏捷实践。例如，在kickoff中，发现dev，UX对story涉及的场景以及内容了解不清楚，QA也可能漏掉一些测试场景，那么我们可以在kickoff之前，加入一个pre- kick off的实践，留出时间，让每个角色都能够完整了解story。在kick off之中，ux没有办法完整的确认页面的字体大小或者颜色等是否正确，那么在sign off之后，我们也加入一个UX-test实践，帮助UX能够更好解决这些问题。
所以每个项目也都有应适合自己项目的敏捷实践，发现项目存在的问题，持续改进才是最佳实践。

## 再来谈谈自动化测试吧。
![pyramid](/images/pyramid.png)
上面的测试金字塔对于大家来说再熟悉不过了，对于自动化测试来说最有价值的仍然是单元测试，但对于QA来说无疑最复杂的。
大部分QA或者tester，仍然以UI自动化为重心。之所以反对盲目的UI自动化测试，因为变化频繁的UI设计，极低投入产生比，都应该让我们重新思考下UI自动化的价值。
### 我们需要一个实施UI自动化正确的方式：
- 能不用UI自动化测试就不用，梳理业务主线，只保留用户操作最频繁，交互最多的场景。
- 根据面向对象设计的原则，构建适合项目的UI自动化框架，无论自己编写框架，还是采用开源框架。
- 尽量采用独立测试数据，确保运行测试不受影响。例如采用mock数据库或者每次运行时还原测试数据库。
### 回到正题，面对自动化测试的大潮，QA应该关注什么？
- 编码规范，真实例子，dev对于类名命名没有用Camel-Case，造成在linux系统中部署不成功，python中乱使用缩进等。 其实都可以避免到，例如开发工具加入自动检查，或者在CI上加入校验编码规范的步骤，采用一些工具就可以达到目的，jshint，RuboCop等。
- pair完成单元测试或API测试等，一方面可以提高QA的编码能力，另一面可以给出dev一些建议，将单元测试覆盖到更多的场景。
例如，如果你们项目采用react作为前端框架，如果你不能理解react virtual dom 与jsx，当我们在写UI自动化脚本时，你会发现根本无法进行下去，日常中我们定位元素全是这种
```
<div class="styles__formField___1fyGy">
<input type="text" placeholder="Email">
<svg class="styles__formIcon___37VGd" viewBox="0 0 24 24" style="display: inline-block; fill: rgba(0, 0, 0, 0.870588); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
</path>
</svg>
</div>
```
,所有的页面都是js渲染出来的，如果你懂jsx，就知道只需要在对于的Component render方法中更改加入id等元素就可以搞定
```
render() {
    return (
        <div>
        <input type="text" placeholder="Email" id="Email">
        </div>
    )
}
```
- 控制单元测试覆盖率，100%的单元测试覆盖率当然是最好的，但如果交付压力大，和客户商量后，我们可以尽量覆盖业务主线，而不是为了达到覆盖率延误了交付周期。

## 再来谈谈质量分析。
作为一个QA，我们不仅要检测项目中存在问题，也要改进团队的实践活动，更重要的是预防问题的发生。
- 每次bugbash或相应迭代完成后，要分析统计，找出产生缺陷的环节，并采取措施防止问题再现。例如每次release或者bug bash之后,我可以按照功能模块与bug类型进行统计划分，分析统计bug的成因，例如某次迭代我们bug数量激增，经调查，发现我们对某些模块的前端代码进行了重构，但缺乏相应的单元测试与集成测试，造成了我们没有及时发现bug。之后我们就对应的采取措施防止问题再现。
- 总结分析报告，及时反馈这些信息给团队。总结分析是一个长期的任务，每次bug数量的变动，都会直接体现整个团队上次迭代的开发质量，例如bug数量减少了，可以鼓励成员再接再厉。或者某几次迭代某些模块bug成上升趋势，那么就需要组织团队一起讨论问题根源，采取措施防止问题重现。
- 利用代码质量分析工具帮助我们尽早预防问题的发生。例如sonar代码质量管理平台，可以帮助我们从代码复杂度，重复代码，单元测试覆盖率，编码规范等纬度来分析我们代码所存在的问题。当然也有其他的开源工具，像RubyCritic，/plato不同的语言都会有相应的工具。
- 在线监控，利用像newrelic，airbnb等监控工具对部署在本地或在云中的web应用程序进行监控、故障修复、诊断、线程分析以及容量计划。这样就算们产品环境有任何问题，我们都会及时响应，尽早修复，减低损失。

## 最后让我们在看看QA应具有那些能力与技能.
![qa_capablities](/images/qa_capablities.png)
![qa_skills](/images/qa_skills.png)

软技能方面包括风险控制，辅导他人，沟通能力，分析定位等。技能方面则包括缺陷管理，流程改进，测试分析，可用性测试，性能测试，安全测试等。

## 写在最后
回顾上面这些实践，其实我们可以做的更好，而不是把团队的质量全都交给自动化，回归QA的应有的初心，让我们从各个方面改进质量，带给团队更好的未来。

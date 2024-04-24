[MLLM 论文推荐-2024.3.12](https://zhuanlan.zhihu.com/p/686592191)
# FastV: An Image is Worth 1/2 Tokens After Layer 2
对于图文多模态大语言模型例如 LLaVA-1.5, QwenVL-Chat 和 Video-LLaVA，作者发现visual token 的注意力计算非常低效，也就是说 MLLM 在推理时候会忽略掉大部分视觉 token，而我们知道视觉 token 实际上占了输入全部 token 中的大部分，特别是图片分辨率高的时候。

如果我们有办法在推理时候剪掉大量无用的视觉 token，那么计算的效率将大幅提升，FLOPs 锐减，岂不是美滋滋。 基于这个发现作者提出了一个**即插即用的视觉 token 剪枝。在不损失模型性能情况下，无需训练只需要推理时候剪掉部分视觉 token ，就可以大幅降低 FLOPs**
![[Pasted image 20240411144818.png]]

核心做法是：在 LLM layer 推理层，想办法计算出哪些 visual token 是重要的，然后去掉不重要的就行了。具体做法也比较简单，计算每个 visual token 和其余所有 token 的注意力的 attenion score 总和，然后进行重要性排序即可。

## 展望

论文全文都是以理论的 FLOPs 来说明的，但是大家知道 FLOPs 小不代表模型真的更高效。而且剪枝算法对于 LLM 部署很不友好，不方便部署。

作者在最后也强调了下，后续会考虑让这个算法在 vLLM 中支持实现高效部署。

## 启发

这个算法无需训练是蛮好的。但是目前来说部署不友好，但是作者发现的事实非常有意思，值得探讨。

换个角度思考，image token 被大量忽略出现的原因可能是啥呢？我个人觉得一个原因是：**image token 其实对齐的不是很好，llm 走捷径了，只看一些容易看的 image token。**

**因此一个更好的对齐策略，或者探索让 image token 更有区分度而不减少 token 都是非常值得尝试的。**


---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat. -->

Greetings! I'm a first-year Ph.D. student jointly supervised by Fudan University and [Shanghai AI Lab](https://www.shlab.org.cn/), specializing in artificial intelligence. I earned my bachelor's degree in AI from Shanghai Jiao Tong University. I'm also interning at the [InternLM](https://github.com/InternLM/InternLM) team.

My research interests focus on Large Language Models (LLMs). My work lies in improving LLMs' reasoning capabilities in specialized domains through synthetic data generation and reinforcement learning.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News

- *2025.08*: &nbsp;🎉🎉 Our paper UnitCoder is accepted by [EMNLP 2025](https://2025.emnlp.org/).
- *2025.07*: We release [InternS1](https://github.com/InternLM/Intern-S1), an advanced open-source multimodal reasoning model.
- *2025.04*: We release [**InternThinker Go**](https://intern.openxlab.org.cn/internthinker/go-game/), the **first** general LLM with expert level Go performance. 
- *2025.04*: We release [**InternBootCamp**](https://github.com/InternLM/InternBootcamp), a library of bootcamp environments for training LRMs. 

# 📝 Publications 

## First-author Papers

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP, 2025</div><img src='images/paper_imgs/unitcoder.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[UnitCoder: Scalable Code Synthesis from Pre-training Corpora](https://arxiv.org/abs/2502.11460)

**Yichuan Ma**, Yunfan Shao, Peiji Li, Demin Song, Qipeng Guo, Linyang Li, Xipeng Qiu, Kai Chen

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

</div>
</div>

## Co-author Papers

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL, 2025</div><img src='images/paper_imgs/fastmcts.png' alt="paper" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

[FastMCTS: A Simple Sampling Strategy for Data Synthesis](https://arxiv.org/abs/2502.11476)

Peiji Li, Kai Lv, Yunfan Shao, **Yichuan Ma**, Linyang Li, Xiaoqing Zheng, Xipeng Qiu, Qipeng Guo

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING, 2024</div><img src='images/paper_imgs/Case2Code.png' alt="paper" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

[Case2Code: Scalable Synthetic Data for Code Generation](https://arxiv.org/abs/2407.12504)

Yunfan Shao, Linyang Li, **Yichuan Ma**, Peiji Li, Demin Song, Qinyuan Cheng, Shimin Li, Xiaonan Li, Pengyu Wang, Qipeng Guo, Hang Yan, Xipeng Qiu, Xuanjing Huang, Dahua Lin

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv, 2024</div><img src='images/paper_imgs/InternLM-Math.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[InternLM-Math: Open Math Large Language Models Toward Verifiable Reasoning](https://arxiv.org/abs/2402.06332)

Huaiyuan Ying, Shuo Zhang, Linyang Li, Zhejian Zhou, Yunfan Shao, Zhaoye Fei, **Yichuan Ma**, Jiawei Hong, Kuikun Liu, Ziyi Wang, Yudong Wang, Zijian Wu, Shuaibin Li, Fengzhe Zhou, Hongwei Liu, Songyang Zhang, Wenwei Zhang, Hang Yan, Xipeng Qiu, Jiayu Wang, Kai Chen, Dahua Lin


</div>
</div>
<!-- Add more co-author papers here -->



<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📖 Educations
- <img src="images/FDU.jpg" alt="Fudan University" width="30" height="30"> *2024.09 - Now*, Ph.D. student in Computer Science, Fudan University and [Shanghai AI Lab](https://www.shlab.org.cn/) 
- <img src="images/SJTU.png" alt="Shanghai Jiao Tong University" width="30" height="30"> *2020.09 - 2024.06*, Bachelor's degree in Artificial Intelligence, Shanghai Jiao Tong University 

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
- *2023.11 - Now*, Shanghai AI Lab, [InternLM Team](https://github.com/InternLM), China.

# 🎯 Hobbies

## <img src="images/go.svg" alt="Go" width="20" height="20"> Go
I am an amateur 5-dan Go  player with several notable achievements:
- **2021 Shanghai University Go League**: Best Newcomer Award
- **Suzhou Go League**: Champion
- **Suzhou Youth Go Championship**: 3-time Champion

I am currently ranked 9-dan on [FoxGo](https://www.foxwq.com/), welcome anyone to a game!

## <img src="images/badminton.svg" alt="badminton" width="20" height="20"> Badminton

Started playing badminton at the age of 6.

## <img src="images/SC2.png" alt="SC2" width="20" height="20"> StarCraft II

SC2 is the best game!
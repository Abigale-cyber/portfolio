const projects = [
  {
    name: '企业级员工智能客服',
    meta: ['LLM · RAG · Multi-Agent', '万达 4万+员工', '产品 Owner'],
    intro:
      '为万达集团 4 万余名员工打造的企业级智能客服，把分散在运营、物业、招商、HR 的制度做成"有问题先问 AI"的统一入口。',
    duties: [
      ['企业级 AI 产品 0→1 与全生命周期管理', '从场景识别、需求洞察、MVP 定义、大模型选型到上线 Bad Case 闭环。'],
      ['跨团队协同与交付管理', '输出 PRD 与 RAG 链路方案，组织算法、前后端及业务方完成开发到上线的闭环。'],
    ],
    metrics: [
      ['78%→96%', '意图识别准确率'],
      ['×3', '信息获取效率'],
      ['500万+', '年省成本'],
    ],
    image: './assets/project-service-employee.png',
    demo: 'https://81.70.39.125:8443/ai-customer-service-blue/',
  },
  {
    name: 'AI 智能销售助手',
    meta: ['LLM · RAG', '考研招生', '独立 AI 产品负责人'],
    intro:
      '招生高度依赖销冠、难复制，人一走转化就掉。我把销冠的话术与跟进逻辑沉淀成 AI 销售助手 + 陪练，让普通销售也能接近销冠打法。',
    duties: [
      ['商业场景识别与产品策略', '判断招生各环节是否适合 AI 切入，聚焦最耗人力、最影响转化的销售场景。'],
      ['AI 产品全生命周期管理', '独立完成"定方案 → 做 MVP → 推进落地 → 拿到业务结果"全流程。'],
    ],
    metrics: [
      ['2个月→7-10天', '新人开单周期'],
      ['+85%', '招生转化率'],
      ['-60%', '客户流失率'],
    ],
    image: './assets/project-sales-run.png',
    demo: 'https://81.70.39.125:8443/ai-sales-coach-orange/learner/growth',
  },
  {
    name: 'AI 金牌导师 · 学习陪练助手',
    meta: ['LLM · RAG · Agent', '考研教学', '独立负责 + Vibe Coding'],
    intro:
      '学生练习缺即时反馈、老师批改压力大。我用 LLM+RAG+Agent 做"自动批改 + 错因分析 + 知识点追问"，延伸成"批改—诊断—复盘"的完整学习闭环。',
    duties: [
      ['AI 产品全生命周期管理', '独立主导从方案到落地，把批改经验沉淀为可规模化的学习闭环。'],
      ['业务结果负责与方法论复用', '直接对教学交付核心指标负责，并延伸复用到更多场景。'],
    ],
    metrics: [
      ['+75%', '批改效率 12→3min'],
      ['+73%', '学生好评率'],
      ['4000+', '冲刺期日活'],
    ],
    image: './assets/project-gold-student.png',
    demo: 'https://81.70.39.125:8443/educational-ai/teacher/login',
  },
];

function renderProjects() {
  const list = document.querySelector('#projectList');
  if (!list) return;

  list.innerHTML = projects
    .map((project, index) => {
      const meta = project.meta.map((item) => `<span>${item}</span>`).join('');
      const duties = project.duties
        .map(([title, desc]) => `<li><strong>${title}</strong>${desc}</li>`)
        .join('');
      const metrics = project.metrics
        .map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
        .join('');
      return `
        <article class="project-row app-card${index % 2 === 1 ? ' alt' : ''}">
          <a class="project-shot" href="${project.demo}" target="_blank" rel="noreferrer" aria-label="打开 ${project.name} demo">
            <img src="${project.image}" alt="${project.name} 界面" loading="lazy" />
          </a>
          <div class="project-info">
            <div class="project-meta">${meta}</div>
            <h3>${project.name}</h3>
            <p class="project-intro">${project.intro}</p>
            <ul class="duty-list">${duties}</ul>
            <div class="metric-row">${metrics}</div>
            <a class="btn btn-primary project-demo" href="${project.demo}" target="_blank" rel="noreferrer">
              体验 Demo<i data-lucide="arrow-up-right"></i>
            </a>
          </div>
        </article>
      `;
    })
    .join('');
}

renderProjects();
window.addEventListener('load', () => window.lucide?.createIcons());

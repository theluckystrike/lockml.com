/* lockml.com — ML Model Comparison Table */
'use strict';

var MODELS = [
  { name:"Llama 3.1 405B", org:"Meta", params:405, license:"Llama 3.1 Community", released:"2024-07-23", mmlu:87.3, tags:["chat","code","reasoning"], link:"https://llama.meta.com", context:128000, modality:"Text", training:"15T tokens", notes:"Largest open-weight model from Meta. Competitive with GPT-4 on many benchmarks." },
  { name:"Llama 3.1 70B", org:"Meta", params:70, license:"Llama 3.1 Community", released:"2024-07-23", mmlu:82.0, tags:["chat","code"], link:"https://llama.meta.com", context:128000, modality:"Text", training:"15T tokens", notes:"Strong mid-size model. Excellent cost-performance ratio." },
  { name:"Llama 3.1 8B", org:"Meta", params:8, license:"Llama 3.1 Community", released:"2024-07-23", mmlu:68.4, tags:["chat","edge"], link:"https://llama.meta.com", context:128000, modality:"Text", training:"15T tokens", notes:"Efficient small model suitable for edge deployment." },
  { name:"Mistral Large 2", org:"Mistral AI", params:123, license:"Mistral Research", released:"2024-07-24", mmlu:84.0, tags:["chat","code","multilingual"], link:"https://mistral.ai", context:128000, modality:"Text", training:"Undisclosed", notes:"Mistral's flagship. Strong multilingual and code performance." },
  { name:"Mistral 7B v0.3", org:"Mistral AI", params:7.3, license:"Apache 2.0", released:"2024-05-22", mmlu:62.5, tags:["chat","edge"], link:"https://mistral.ai", context:32000, modality:"Text", training:"Undisclosed", notes:"Pioneering small model. Extended vocabulary and function calling." },
  { name:"Mixtral 8x22B", org:"Mistral AI", params:141, license:"Apache 2.0", released:"2024-04-17", mmlu:77.8, tags:["chat","code","reasoning"], link:"https://mistral.ai", context:65000, modality:"Text", training:"Undisclosed", notes:"Sparse MoE architecture. 39B active parameters per forward pass." },
  { name:"Phi-3 Medium 14B", org:"Microsoft", params:14, license:"MIT", released:"2024-05-21", mmlu:78.0, tags:["chat","reasoning","edge"], link:"https://azure.microsoft.com/en-us/products/phi-3", context:128000, modality:"Text", training:"3.3T tokens", notes:"Punches way above weight class. Trained on high-quality synthetic data." },
  { name:"Phi-3 Mini 3.8B", org:"Microsoft", params:3.8, license:"MIT", released:"2024-04-23", mmlu:69.7, tags:["edge","chat"], link:"https://azure.microsoft.com/en-us/products/phi-3", context:128000, modality:"Text", training:"3.3T tokens", notes:"Runs on phones. Surprisingly capable for its size." },
  { name:"Gemma 2 27B", org:"Google", params:27, license:"Gemma", released:"2024-06-27", mmlu:75.2, tags:["chat","reasoning"], link:"https://ai.google.dev/gemma", context:8192, modality:"Text", training:"13T tokens", notes:"Knowledge distilled from Gemini. Excellent efficiency." },
  { name:"Gemma 2 9B", org:"Google", params:9, license:"Gemma", released:"2024-06-27", mmlu:71.3, tags:["chat","edge"], link:"https://ai.google.dev/gemma", context:8192, modality:"Text", training:"8T tokens", notes:"Strong small model for research and development." },
  { name:"Qwen 2 72B", org:"Alibaba", params:72, license:"Qwen", released:"2024-06-07", mmlu:84.2, tags:["chat","code","multilingual"], link:"https://qwenlm.github.io", context:128000, modality:"Text", training:"7T tokens", notes:"Leading Chinese-English bilingual model. Strong across benchmarks." },
  { name:"Qwen 2 7B", org:"Alibaba", params:7, license:"Apache 2.0", released:"2024-06-07", mmlu:70.3, tags:["chat","edge","multilingual"], link:"https://qwenlm.github.io", context:128000, modality:"Text", training:"7T tokens", notes:"Compact bilingual model with competitive performance." },
  { name:"Command R+", org:"Cohere", params:104, license:"CC-BY-NC-4.0", released:"2024-04-04", mmlu:75.7, tags:["chat","rag","multilingual"], link:"https://cohere.com/command", context:128000, modality:"Text", training:"Undisclosed", notes:"Optimized for RAG and tool use. 10 language support." },
  { name:"Command R", org:"Cohere", params:35, license:"CC-BY-NC-4.0", released:"2024-03-11", mmlu:68.2, tags:["chat","rag"], link:"https://cohere.com/command", context:128000, modality:"Text", training:"Undisclosed", notes:"Efficient RAG-focused model with grounded generation." },
  { name:"DBRX", org:"Databricks", params:132, license:"Databricks Open", released:"2024-03-27", mmlu:73.7, tags:["code","reasoning"], link:"https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm", context:32000, modality:"Text", training:"12T tokens", notes:"Fine-grained MoE. 36B active params. Strong on code." },
  { name:"Falcon 180B", org:"TII", params:180, license:"Falcon-180B TII", released:"2023-09-06", mmlu:70.4, tags:["chat","reasoning"], link:"https://falconllm.tii.ae", context:2048, modality:"Text", training:"3.5T tokens", notes:"Trained on RefinedWeb. Was largest open model at release." },
  { name:"Falcon 40B", org:"TII", params:40, license:"Apache 2.0", released:"2023-05-25", mmlu:55.4, tags:["chat"], link:"https://falconllm.tii.ae", context:2048, modality:"Text", training:"1T tokens", notes:"First major open model to top Hugging Face leaderboard." },
  { name:"MPT-30B", org:"MosaicML", params:30, license:"Apache 2.0", released:"2023-06-22", mmlu:46.9, tags:["chat","code"], link:"https://www.mosaicml.com/mpt", context:8192, modality:"Text", training:"1T tokens", notes:"Fully commercial license. Trained with MosaicML platform." },
  { name:"StableLM 2 12B", org:"Stability AI", params:12, license:"Stability AI Community", released:"2024-01-19", mmlu:62.2, tags:["chat","edge"], link:"https://stability.ai", context:4096, modality:"Text", training:"2T tokens", notes:"Multilingual model supporting 7 European languages." },
  { name:"Yi-1.5 34B", org:"01.AI", params:34, license:"Apache 2.0", released:"2024-05-13", mmlu:76.8, tags:["chat","reasoning","multilingual"], link:"https://01.ai", context:4096, modality:"Text", training:"3.6T tokens", notes:"Strong bilingual model from Kai-Fu Lee's lab." },
  { name:"Yi-1.5 9B", org:"01.AI", params:9, license:"Apache 2.0", released:"2024-05-13", mmlu:69.5, tags:["chat","edge"], link:"https://01.ai", context:4096, modality:"Text", training:"3.6T tokens", notes:"Compact Yi variant with high efficiency." },
  { name:"DeepSeek-V2", org:"DeepSeek", params:236, license:"DeepSeek", released:"2024-05-06", mmlu:78.5, tags:["chat","code","reasoning"], link:"https://www.deepseek.com", context:128000, modality:"Text", training:"8.1T tokens", notes:"MoE with MLA attention. 21B active params. Extremely efficient inference." },
  { name:"DeepSeek Coder V2", org:"DeepSeek", params:236, license:"DeepSeek", released:"2024-06-17", mmlu:79.2, tags:["code","reasoning"], link:"https://www.deepseek.com", context:128000, modality:"Text", training:"10.2T tokens", notes:"Code-specialized. Beats GPT-4 Turbo on coding benchmarks." },
  { name:"Codestral 22B", org:"Mistral AI", params:22, license:"MNPL", released:"2024-05-29", mmlu:null, tags:["code"], link:"https://mistral.ai", context:32000, modality:"Text", training:"Undisclosed", notes:"80+ programming languages. Fill-in-the-middle support." },
  { name:"Arctic", org:"Snowflake", params:480, license:"Apache 2.0", released:"2024-04-24", mmlu:67.3, tags:["code","reasoning"], link:"https://www.snowflake.com/en/data-cloud/arctic/", context:4096, modality:"Text", training:"3.5T tokens", notes:"Dense-MoE hybrid. 17B active params. Enterprise SQL focus." },
  { name:"OLMo 7B", org:"AI2", params:7, license:"Apache 2.0", released:"2024-02-01", mmlu:52.0, tags:["research"], link:"https://allenai.org/olmo", context:2048, modality:"Text", training:"2.5T tokens", notes:"Fully open including data, weights, code, and training logs." },
  { name:"Jamba 1.5 Large", org:"AI21 Labs", params:398, license:"Jamba Open", released:"2024-08-22", mmlu:80.0, tags:["chat","reasoning"], link:"https://www.ai21.com/jamba", context:256000, modality:"Text", training:"Undisclosed", notes:"SSM-Transformer hybrid. 94B active params. 256K context." },
  { name:"Nemotron-4 340B", org:"NVIDIA", params:340, license:"NVIDIA Open Model", released:"2024-06-14", mmlu:81.1, tags:["chat","reasoning"], link:"https://build.nvidia.com", context:4096, modality:"Text", training:"9T tokens", notes:"Optimized for synthetic data generation for alignment." },
  { name:"InternLM 2.5 20B", org:"Shanghai AI Lab", params:20, license:"Apache 2.0", released:"2024-07-03", mmlu:72.8, tags:["chat","reasoning","multilingual"], link:"https://internlm.intern-ai.org.cn", context:32000, modality:"Text", training:"Undisclosed", notes:"Strong on math and reasoning. Tool use support." },
  { name:"Grok-1", org:"xAI", params:314, license:"Apache 2.0", released:"2024-03-17", mmlu:73.0, tags:["chat","reasoning"], link:"https://x.ai", context:8192, modality:"Text", training:"Undisclosed", notes:"MoE with 8 experts. First open release from xAI." },
  { name:"StarCoder2 15B", org:"BigCode", params:15, license:"BigCode OpenRAIL-M", released:"2024-02-28", mmlu:null, tags:["code"], link:"https://huggingface.co/bigcode", context:16384, modality:"Text", training:"4T tokens", notes:"600+ programming languages. Strong code completion." },
  { name:"Llama 3 70B", org:"Meta", params:70, license:"Llama 3 Community", released:"2024-04-18", mmlu:79.5, tags:["chat","code"], link:"https://llama.meta.com", context:8192, modality:"Text", training:"15T tokens", notes:"Original Llama 3 release. Wide ecosystem support." }
];

var ALL_TAGS = [];
var sortCol = 'params';
var sortAsc = false;
var expandedRow = -1;

function init() {
  collectTags();
  renderTagChips();
  renderTable();
  bindFilters();
  updateCount();
}

function collectTags() {
  var tagSet = {};
  for (var i = 0; i < MODELS.length && i < 200; i++) {
    var t = MODELS[i].tags;
    for (var j = 0; j < t.length && j < 20; j++) {
      tagSet[t[j]] = true;
    }
  }
  ALL_TAGS = Object.keys(tagSet).sort();
}

function renderTagChips() {
  var container = document.getElementById('tag-chips');
  if (!container) return;
  var html = '';
  for (var i = 0; i < ALL_TAGS.length && i < 50; i++) {
    html += '<button class="tag-chip" data-tag="' + ALL_TAGS[i] + '">' + ALL_TAGS[i] + '</button>';
  }
  container.innerHTML = html;
}

function getFilters() {
  var search = (document.getElementById('search-input') || {}).value || '';
  var maxParams = parseFloat((document.getElementById('param-slider') || {}).value) || 500;
  var license = (document.getElementById('license-filter') || {}).value || 'all';
  var activeTags = [];
  var chips = document.querySelectorAll('.tag-chip.active');
  for (var i = 0; i < chips.length && i < 50; i++) {
    activeTags.push(chips[i].getAttribute('data-tag'));
  }
  return { search: search.toLowerCase(), maxParams: maxParams, license: license, tags: activeTags };
}

function filterModels() {
  var f = getFilters();
  var results = [];
  for (var i = 0; i < MODELS.length && i < 200; i++) {
    var m = MODELS[i];
    if (f.search && m.name.toLowerCase().indexOf(f.search) === -1 && m.org.toLowerCase().indexOf(f.search) === -1) continue;
    if (m.params > f.maxParams) continue;
    if (f.license !== 'all') {
      var lic = m.license.toLowerCase();
      if (f.license === 'apache' && lic.indexOf('apache') === -1) continue;
      if (f.license === 'mit' && lic.indexOf('mit') === -1) continue;
      if (f.license === 'restrictive' && (lic.indexOf('apache') !== -1 || lic.indexOf('mit') !== -1)) continue;
    }
    if (f.tags.length > 0) {
      var hasTag = false;
      for (var j = 0; j < f.tags.length && j < 20; j++) {
        if (m.tags.indexOf(f.tags[j]) !== -1) { hasTag = true; break; }
      }
      if (!hasTag) continue;
    }
    results.push(m);
  }
  return sortModels(results);
}

function sortModels(arr) {
  var col = sortCol;
  var asc = sortAsc;
  arr.sort(function(a, b) {
    var va = a[col], vb = b[col];
    if (va === null || va === undefined) va = col === 'mmlu' ? -1 : '';
    if (vb === null || vb === undefined) vb = col === 'mmlu' ? -1 : '';
    if (typeof va === 'string') {
      va = va.toLowerCase();
      vb = (vb + '').toLowerCase();
      return asc ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    return asc ? va - vb : vb - va;
  });
  return arr;
}

function renderTable() {
  var models = filterModels();
  var tbody = document.getElementById('table-body');
  if (!tbody) return;
  var html = '';
  for (var i = 0; i < models.length && i < 200; i++) {
    var m = models[i];
    var isExpanded = expandedRow === i;
    html += '<tr class="model-row' + (isExpanded ? ' expanded' : '') + '" data-idx="' + i + '">';
    html += '<td style="font-weight:600;white-space:normal">' + esc(m.name) + '</td>';
    html += '<td>' + esc(m.org) + '</td>';
    html += '<td style="font-family:var(--font-display);font-size:0.85rem">' + m.params + 'B</td>';
    html += '<td style="font-size:0.8rem">' + esc(m.license) + '</td>';
    html += '<td>' + m.released + '</td>';
    html += '<td style="font-family:var(--font-display)">' + (m.mmlu !== null ? m.mmlu.toFixed(1) : '—') + '</td>';
    html += '<td>';
    for (var j = 0; j < m.tags.length && j < 10; j++) {
      html += '<span class="tag-badge">' + m.tags[j] + '</span>';
    }
    html += '</td>';
    html += '</tr>';
    if (isExpanded) {
      html += '<tr class="detail-row"><td colspan="7"><div class="detail-content">';
      html += '<div><dt>Context Window</dt><dd>' + m.context.toLocaleString() + ' tokens</dd>';
      html += '<dt>Training Data</dt><dd>' + esc(m.training) + '</dd>';
      html += '<dt>Modality</dt><dd>' + esc(m.modality) + '</dd></div>';
      html += '<div><dt>Notes</dt><dd>' + esc(m.notes) + '</dd>';
      html += '<dt>Link</dt><dd><a href="' + esc(m.link) + '" target="_blank" rel="noopener">' + esc(m.link) + '</a></dd></div>';
      html += '</div></td></tr>';
    }
  }
  tbody.innerHTML = html;
  updateCount(models.length);
  updateSortArrows();
  bindRowClicks();
}

function updateCount(count) {
  var el = document.getElementById('results-count');
  if (el) {
    var c = (count !== undefined) ? count : filterModels().length;
    el.textContent = c + ' model' + (c !== 1 ? 's' : '') + ' found';
  }
}

function updateSortArrows() {
  var ths = document.querySelectorAll('.model-table th[data-col]');
  for (var i = 0; i < ths.length && i < 20; i++) {
    var arrow = ths[i].querySelector('.sort-arrow');
    if (!arrow) continue;
    var col = ths[i].getAttribute('data-col');
    if (col === sortCol) {
      arrow.textContent = sortAsc ? '\u25B2' : '\u25BC';
      arrow.classList.add('active');
    } else {
      arrow.textContent = '\u25B4';
      arrow.classList.remove('active');
    }
  }
}

function bindRowClicks() {
  var rows = document.querySelectorAll('.model-row');
  for (var i = 0; i < rows.length && i < 200; i++) {
    rows[i].addEventListener('click', handleRowClick);
  }
}

function handleRowClick(e) {
  var idx = parseInt(this.getAttribute('data-idx'), 10);
  expandedRow = (expandedRow === idx) ? -1 : idx;
  renderTable();
}

function bindFilters() {
  var searchEl = document.getElementById('search-input');
  if (searchEl) searchEl.addEventListener('input', function() { expandedRow = -1; renderTable(); });

  var slider = document.getElementById('param-slider');
  var display = document.getElementById('param-display');
  if (slider) {
    slider.addEventListener('input', function() {
      if (display) display.textContent = '\u2264 ' + this.value + 'B';
      expandedRow = -1;
      renderTable();
    });
  }

  var licFilter = document.getElementById('license-filter');
  if (licFilter) licFilter.addEventListener('change', function() { expandedRow = -1; renderTable(); });

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag-chip')) {
      e.target.classList.toggle('active');
      expandedRow = -1;
      renderTable();
    }
  });

  var ths = document.querySelectorAll('.model-table th[data-col]');
  for (var i = 0; i < ths.length && i < 20; i++) {
    ths[i].addEventListener('click', function() {
      var col = this.getAttribute('data-col');
      if (col === sortCol) { sortAsc = !sortAsc; }
      else { sortCol = col; sortAsc = (col === 'name' || col === 'org' || col === 'license'); }
      expandedRow = -1;
      renderTable();
    });
  }
}

function esc(s) {
  if (s === null || s === undefined) return '';
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

document.addEventListener('DOMContentLoaded', init);

// env_config.js
// 此文件用于在Web平台上配置Supabase环境变量

// 立即设置配置，不等待DOM加载
(function() {
  // 创建Supabase配置对象
  window.__SUPABASE_CONFIG__ = {
    SUPABASE_URL: 'https://puoykbmndkxfftlkfcib.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1b3lrYm1uZGt4ZmZ0bGtmY2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjg4MjYsImV4cCI6MjA2OTcwNDgyNn0.QlfXWvNrMlMTHQZZKiEhI_skXw1h9D4ES_OCpRXe-Ng'
  };
  
  // 简化localStorage操作，避免冲突
  try {
    // 只在localStorage中没有配置时才设置
    if (!localStorage.getItem('SUPABASE_URL')) {
      localStorage.setItem('SUPABASE_URL', window.__SUPABASE_CONFIG__.SUPABASE_URL);
      localStorage.setItem('SUPABASE_ANON_KEY', window.__SUPABASE_CONFIG__.SUPABASE_ANON_KEY);
    }
  } catch (e) {
    // 出错时静默处理，不输出错误日志
  }
})();
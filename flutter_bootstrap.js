// 自定义Flutter引导文件
console.log('Flutter引导文件加载成功');

// 设置Supabase配置
window.__SUPABASE_CONFIG__ = {
  SUPABASE_URL: 'https://puoykbmndkxfftlkfcib.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1b3lrYm1uZGt4ZmZ0bGtmY2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjg4MjYsImV4cCI6MjA2OTcwNDgyNn0.QlfXWvNrMlMTHQZZKiEhI_skXw1h9D4ES_OCpRXe-Ng'
};

// 保存到localStorage
try {
  localStorage.setItem('SUPABASE_URL', window.__SUPABASE_CONFIG__.SUPABASE_URL);
  localStorage.setItem('SUPABASE_ANON_KEY', window.__SUPABASE_CONFIG__.SUPABASE_ANON_KEY);
} catch (e) {
  console.error('保存配置到localStorage失败:', e);
}

// 错误处理
window.onerror = function(message, source, lineno, colno, error) {
  console.error('应用错误:', message, error);
  // 显示错误元素（如果存在）
  var errorElement = document.getElementById('flutter-error');
  if (errorElement) {
    errorElement.style.display = 'block';
  }
  return true;
};

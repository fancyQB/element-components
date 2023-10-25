
import { ElMessage } from 'element-plus';
// 复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement('input')
  // 给输入框value 赋值
  input.value = text
  // 追加到body 里面
  document.body.appendChild(input)
  // 选择到输入框
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  // 删除加入的输入框
  document.body.removeChild(input)
  // 提示用户
  ElMessage.success('复制成功')
}
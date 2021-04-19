## 交作業流程

1. git clone  https://github.com/Lidemy/mentor-program-5th-charmisan.git
2. git checkout -b week1
3. cd homeworks/week1
4. 寫作業 hw1.md
5. git commit -am "finish"
6. git push origin wee1
7. 送出 PR
8. 把 PR 的連結複製起來，並且在學習系統上繳交作業

等作業改完並且 merge 以後：

1. 切換到 master：git checkout master
2. 把最新的改動拉下來：git pull origin master
3. 刪除已經 merge 的 branch：git branch -d hw1

**概念**

* workspace：工作区
* indexstage：暂存区
* repository：版本库
* remote：远程版本库
* HEAD：指向当前分支

###### **常用命令**

1. 文档查询

- `git help -a`: 查看全部命令列表

2. 分支

- `git branch`: 查看本地分支 -a全部分支 -r 远程分支
- `git checkout`: 切换分支 -b新建并且换 -d删除
- `git merge`: 合并分支到当前分支
- `git branch --merged`: 查看有哪些分支合并到当前分支 可以追溯

3. 撤销

- `git reset --(soft | mixed | hard ) < HEAD~(num) > | <commit id>`

​	    –hard: 撤销版本库 暂存区 工作区

​        –mixed: 撤销版本库 暂存区

​        –soft: 只撤销版本库

- `git checkout <path>`: 撤销工作区文件修改

4. 工作区状态查询

- `git status`: 查看状态
- `git reflog`: 查看历史操作记录
- `git log`: 查看日志

5. 差异比较

- `git diff`: 比较工作区与缓存区
- `git diff --cached`: 比较暂存区与本地库中最近一次commit的内容
- `git diff HEAD`: 比较工作区与本地最近一次commit内容
- `git diff commitId`: 当前工作区和暂存区与commitId之间的改动；可写两个commitId 是两个commit之间的不同点

6. 文件缓存

- `git stash save -u 'message'`: 暂存本地工作区的改动 （-a表示all，是不仅仅把新加入的代码文件放入暂存区，还会把用.gitignore忽略的文件放入暂存区。如果想不影响被忽略的文件，那就要用-u，表示untracked files）
- `git stash list`: 查看暂存的列表
- `git stash drop <stash@{ID}>`: 删除暂存
- `git stash pop <stash@{ID}>`: 恢复暂存

7. tag

- `git tag <tagname>`: 用于新建一个标签 默认为HEAD 也可以指定一个commit id
- `git tag -a <tagname> -m "..."`: 可以指定标签信息
- `git tag`: 可以查看所有标签
- `git push --tags`: 将本地所有tag推送到远程

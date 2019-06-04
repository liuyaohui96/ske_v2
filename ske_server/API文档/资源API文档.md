# 资源创建相关(非个人中心)

# 创建资源
| 请求方法 | 请求url                               | 请求参数(参数类型) |
| -------- | ------------------------------------- | ------------------ |
| post     | http://localhost:3000/users/resources | 列举               |
1. 参数列举
  - classification
  - author_id
  - title
  - content:
2. 描述： _id从token中获得，登陆后才能创建资源，创建后，并将该资源添加到用户列表中
3. 返回示例(根据数据库结构)

----------------------------------------------------
# 资源更新相关
## 进行资源编辑
| 请求方法 | 请求url                               | 请求参数(参数类型)            |
| -------- | ------------------------------------- | ----------------------------- |
| put      | http://localhost:3000/resources/:r_id | classification,title, content |

1. 描述： 前端点击编辑页面（只有作者才能看到编辑），跳转到编辑压面，获取资源title和content，发起资源编辑更新
  - 对token进行verify，获得用户_id 判断用户是否具有编辑的权限
2. 返回示例(根据数据库结构)

## 增加收藏数
| 请求方法 | 请求url                                                | 请求参数(参数类型) |
| -------- | ------------------------------------------------------ | ------------------ |
| put      | http://localhost:3000/resources/:_id/collection-counts |                    |

1. 描述： 点击后，对该文章的收藏数进行增加，收藏后同步到用户，用户_id由token获取
2. 返回示例(根据数据库结构)

## 增加点赞数
| 请求方法 | 请求url                                          | 请求参数(参数类型) |
| -------- | ------------------------------------------------ | ------------------ |
| put      | http://localhost:3000/resources/:_id/like-counts |                    |

1. 描述： 点击后，对该文章的点赞数进行增加
2. 返回示例(根据数据库结构)


## 增加评论
| 请求方法 | 请求url                                       | 请求参数(参数类型) |
| -------- | --------------------------------------------- | ------------------ |
| post     | http://localhost:3000/resources/:_id/comments | comment            |
1. 描述： 根据token获得用户id，将comment假如到resource中的comments中
2. 返回示例(根据数据库结构)



---------------------------------------------------------------- 资源查询部分
## 根据资源id返回资源内容
| 请求方法 | 请求url                              | 请求参数(参数类型) |
| -------- | ------------------------------------ | ------------------ |
| GET      | http://localhost:3000/resources/:_id | _id                |
1. 描述： 返回指定number的知识资源,用于首页推荐
2. 返回示例(根据数据库结构)


## 根据点赞数量，返回首页的推荐知识资源(返回热门推荐资源)
| 请求方法 | 请求url                                         | 请求参数(参数类型) |
| -------- | ----------------------------------------------- | ------------------ |
| GET      | http://localhost:3000/recommend-resources/:sort | number             |  |  |
1. 描述： 返回指定number的知识资源,用于首页推荐
  - sort 接受两个值 hot 或者 newest
2. 返回示例(根据数据库结构)



## 根据分类名称获取，返回知识资源
| 请求方法 | 请求url                                                              | 请求参数(参数类型) |
| -------- | -------------------------------------------------------------------- | ------------------ |
| GET      | http://localhost:3000/classification-resources/:classification/:sort |                    |

1. 描述： 返回指定分类资源
  - sort 接受两个值 hot 或者 newest

2. 返回示例(根据数据库结构)
  - http://localhost:3000/classification-resources/computer-sciences
  - http://localhost:3000/classification-resources/economic
  - http://localhost:3000/classification-resources/social-sciences
  - http://localhost:3000/classification-resources/history
  - http://localhost:3000/classification-resources/art-and-humanities


# 根据标题是否包含关键字返回资源

| 请求方法 | 请求url                             | 请求参数(参数类型) |
| -------- | ----------------------------------- | ------------------ |
| GET      | http://localhost:3000/search/title=&sort =  |                     |
1. 因为search使用query能够更好支持中文
 - sort 接受两个值 hot 或者 newest

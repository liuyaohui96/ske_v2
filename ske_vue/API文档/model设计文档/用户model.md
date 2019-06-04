# 必须的用户信息
* username
  - type String
  - requrire

* email
  - type String
  - require

* password
  - type String(hash)
  - require

* status
  - type Number
  - default 0(0 未激活， 1 激活)

* reset_password_token
  - type String

* reset_password_expires
  - type String

# 可填的用户中心信息
* avatar----（有点难）
  - type String
  
* gender
  - type String
  - default 0 (0 ---> man, 1 ---> woman)

* age
  - type String
  - default ''

* birthday
  - year String 
    - default ''
  - month String
    - default ''
  - date String
    - default ''
* location
  - type String
  - default ''

* mtto(墓志铭)
  - type String
  - default ''

* introduction(个人简介)
  - type String
  - default ''

* private
  - type Boolean
  - default 0(即false即不是私有的，即公开的;1即true，即私有的)


# 用户收藏的资源
* collection
  - type `[String]`(收藏的资源id)

# (用户上传的资源
* resoures(用户上传的资源)
  - type `[String]`


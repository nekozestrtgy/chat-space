# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer||
|body|text||
|iamge|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer||
|name|string||
|description|text||

### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer||
|name|string||
|email|text||

### Association
- has_many :members
- has_many :messages
- has_many :groups, through: :members

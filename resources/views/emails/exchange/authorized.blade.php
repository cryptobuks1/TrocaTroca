@component('mail::message')
# Olá {{$exchange->user2->username}} e {{$exchange->user1->username}}

A Troca Confirmada entre os colaboradores no sistema na data {{$exchange->date}} foi Autorizada pelo supervisor {{$user->username}}.

Obtigado,<br>
{{ config('app.name') }}
@endcomponent

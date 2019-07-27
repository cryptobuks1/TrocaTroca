@component('mail::message')
# Olá {{$exchange->user1->username}}

A Sua Troca Cadastrada no sistema com {{$exchange->user2->username}} na data {{$exchange->date}} foi confirmada pelo mesmo.

Obrigado,<br>
{{ config('app.name') }}
@endcomponent

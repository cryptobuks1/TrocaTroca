@component('mail::message')
# Olá {{$exchange->user2->username}} e {{$exchange->user1->username}}

A Troca Confirmada entre os colaboradores no sistema na data {{$exchange->date}} foi Cancelada pelo supervisor {{$user->username}}.

Obrigado,<br>
{{ config('app.name') }}
@endcomponent

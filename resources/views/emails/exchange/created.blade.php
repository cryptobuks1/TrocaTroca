@component('mail::message')
# Olá {{$exchange->user2->username}}

Foi Cadastrada uma Troca no sistema com {{$exchange->user1->username}} na data {{$exchange->date}}.


Obrigado,<br>
{{ config('app.name') }}
@endcomponent

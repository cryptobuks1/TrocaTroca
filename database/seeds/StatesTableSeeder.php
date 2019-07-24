<?php

use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->insert([
            'state_name' => 'Acre',
            'initials' => 'AC',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Alagoas',
            'initials' => 'AL',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Amapá',
            'initials' => 'AP',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Amazonas',
            'initials' => 'AM',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Bahia',
            'initials' => 'BA',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Ceará',
            'initials' => 'CE',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Distrito Federal',
            'initials' => 'DF',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Espirito Santo',
            'initials' => 'ES',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Goiás',
            'initials' => 'GO',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Maranhão',
            'initials' => 'MA',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Mato Grosso',
            'initials' => 'MT',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Mato Grosso do Sul',
            'initials' => 'MS',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Minas Gerais',
            'initials' => 'MG',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Pará',
            'initials' => 'PA',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Paraíba',
            'initials' => 'PB',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Paraná',
            'initials' => 'PR',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Pernambuco',
            'initials' => 'PE',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Piauí',
            'initials' => 'PI',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Rio de Janeiro',
            'initials' => 'RJ',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Rio Grande do Norte',
            'initials' => 'RN',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Rio Grande do Sul',
            'initials' => 'RS',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Rondonia',
            'initials' => 'RO',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Roraima',
            'initials' => 'RR',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Santa Catarina',
            'initials' => 'SC',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'São Paulo',
            'initials' => 'SP',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Sergipe',
            'initials' => 'SE',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
        DB::table('states')->insert([
            'state_name' => 'Tocantins',
            'initials' => 'TO',
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);
    }
}

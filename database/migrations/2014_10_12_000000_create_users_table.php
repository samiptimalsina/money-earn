<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('customer_number');
            $table->string('password');
            $table->string('coin')->default(0);
            $table->string('today_order')->default(0);
            $table->string('level')->default(1);
            $table->string('today_earn')->default(0);
            $table->string('yesterday_earn')->default(0);
            $table->string('today_team_earn')->default(0);
            $table->string('yesterday_team_earn')->default(0);
            $table->string('total_earn')->default(0);
            $table->string('status')->default(0);
            $table->string('bind')->default(0);
            $table->string('created_at')->nullable();
            $table->string('updated_at')->nullable();
            $table->string('login_at')->default(0);
            $table->string('Total_Recharge')->default(0);
            $table->string('Total_Withdrawal')->default(0);
            $table->string('Team_contrubtion')->default(0);
            $table->string('lvl1Bonus')->default(0);
            $table->string('lvl2Bonus')->default(0);
            $table->string('lvl3Bonus')->default(0);
            $table->string('Mission1')->default(0);
            $table->string('Mission2')->default(0);
            $table->string('Mission3')->default(0);
            $table->string('Mission4')->default(0);
            $table->string('Mission5')->default(0);
            $table->string('Mission6')->default(0);
            $table->string('Mission7')->default(0);
            $table->string('Mission8')->default(0);
            $table->string('Mission9')->default(0);
            $table->string('Mission0')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

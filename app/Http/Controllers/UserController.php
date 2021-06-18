<?php

namespace App\Http\Controllers;


use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    //
    public function index()
    {
        //

    }
    public function login(Request  $request)
    {
        //
        $customer_number=$request->customer_number;
        $password=$request->password;
        $user= User::where('customer_number', )->first();
        dd($user);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function  register(Request $request){


        $this->validate($request, [
            'user_name' => ['required', 'string', 'max:255'],
            'customer_number' => ['required', 'numeric', 'min:10','digits:10', 'unique:users,customer_number'],
            'referral_number' => ['required', 'numeric','digits:10', 'min:10'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        $user_name = $request->user_name;
        $customer_number= $request->customer_number;
        $referral_number = $request->referral_number;
        $password = $request->password;
        $referal_check = User::where('customer_number', $referral_number)->get();


        if (isset($referal_check)) {
            $customer = new User();
            $customer->customer_number = $customer_number;
            $customer->name = $user_name;
            $customer->password = $password;
            $customer->save();
            DB::table('referral_level_1')->insert([
                'old_user_number' => $referral_number,
                'new_user_number' => $customer_number,
            ]);


            $referal_one = DB::table('referral_level_1')->where('new_user_number', $referral_number)->pluck('old_user_number')->first();

            if (isset($referal_one)) {

                DB::table('referral_level_2')->insert([
                    'old_user_number' => $referal_one,
                    'new_user_number' => $customer_number,
                ]);


                $referal_one2 = DB::table('referral_level_1')->where('new_user_number', $referal_one)->pluck('old_user_number')->first();

                if (isset($referal_one2)) {
                    DB::table('referral_level_3')->insert([
                        'old_user_number' => $referal_one2,
                        'new_user_number' => $customer_number,
                    ]);




                } else {
                    return response()->json([
                        'ref_err'=>'Referral level three not registred'
                    ]);
                }


            }

            else{
                return response()->json([
                    'ref_err'=>'ref error has'
                ]);
            }



        }
        else{
            return response()->json([
                'message'=>"User not registerd",
            ]);
        }

    }

    public function create(Request $request)
    {
        //
        $this->validate($request, [
            'user_name' => ['required', 'string', 'max:255'],
            'customer_number' => ['required', 'numeric', 'min:10', 'unique:users,customer_number'],
            'referral_number' => ['required', 'numeric', 'min:10'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $customer_number = $request->input('customer_number');
        $referral_number = $request->input('referral_number');
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        $referal_check = User::where('customer_number', $referral_number)->get();

        if (isset($referal_check)) {
            $customer = new User();
            $customer->customer_number = $customer_number;
            $customer->name = $user_name;
            $customer->password = $password;
            $customer->save();
            DB::table('referral_level_1')->insert([
                'old_user_number' => $referral_number,
                'new_user_number' => $customer_number,
            ]);


            $referal_one = DB::table('referral_level_1')->where('new_user_number', $referral_number)->pluck('old_user_number')->first();

            if (isset($referal_one)) {

                DB::table('referral_level_2')->insert([
                    'old_user_number' => $referal_one,
                    'new_user_number' => $customer_number,
                ]);


                $referal_one2 = DB::table('referral_level_1')->where('new_user_number', $referal_one)->pluck('old_user_number')->first();

                if (isset($referal_one2)) {
                    DB::table('referral_level_3')->insert([
                        'old_user_number' => $referal_one2,
                        'new_user_number' => $customer_number,
                    ]);




                } else {
                    return redirect()->back();
                }


            } else {

                return Redirect::back()->with('ref_err','ref error has ');
            }

            //     $referal_one1=Referral::where('referral_number',$referal_one)->pluck('customer_number');
            //  dd($referal_one1);


            //    $referal_two=Referral::where('customer_number',$referral_number)->get();


        }
        else {
            return redirect()->back()->with('notexist', 'Number Invilled');
        }


        return redirect()->back()->with('success', 'You have successfully inserted data');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $customer)
    {
        //
    }

    public function profile()
    {
        //
        $id = Auth::id();
//     return $user_info=User::where('id',$id)->get();
        return view('front.profile');

    }

    public function apiProfile()
    {
        $id = Auth::id();
        return $user_info = User::where('id', $id)->get();

    }


    public function loginIndex()
    {
        if (Auth::check()) {
            return redirect()->route('home');
        }
        return view('auth.login');
    }

    public function customLogin(Request $request)
    {
        $request->validate([
            'customer_number' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('customer_number', 'password');

        if (Auth::user()) {
            return \redirect()->route('home');
        } else {
            if (Auth::attempt($credentials)) {
                return redirect()->route('home');
            }
            return redirect("login")->withErrors('Login details are not valid');
        }
    }

    public function getLogout()
    {
        Auth::logout();
        Session::flush();
        return Redirect::to('/');
    }

    public function referral(Request $request,$id){


        return view('auth.register',compact('id'));
    }

    public function recharge(Request $request){
        return $request;
    }

    public function getData(){
        $data=  User::all();
        return response()->json($data);
    }
}

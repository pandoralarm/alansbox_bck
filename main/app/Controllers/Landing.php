<?php namespace App\Controllers;

class Landing extends BaseController
{
	public function index()
	{
		echo view('_parts/header.php');
		echo view('landing_page.php');
		echo view('_parts/footer.php');
	}

	//--------------------------------------------------------------------

}

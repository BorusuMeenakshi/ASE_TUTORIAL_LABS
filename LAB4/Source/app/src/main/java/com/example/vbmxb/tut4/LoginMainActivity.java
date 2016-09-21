package com.example.vbmxb.tut4;

import android.content.Intent;
import android.inputmethodservice.KeyboardView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class LoginMainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_main);
        init();
    }
    public void init()
    {
        Button button=(Button) findViewById(R.id.blogin);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText usernameCtrl = (EditText)findViewById(R.id.tuname);
                EditText passwordCtrl = (EditText) findViewById(R.id.tpwd);
                TextView errorText = (TextView)findViewById(R.id.lbl_Error);
                String userName = usernameCtrl.getText().toString();
                String password = passwordCtrl.getText().toString();

                boolean validationFlag = false;
                //Verify if the username and password are not empty.
                if(!userName.isEmpty() && !password.isEmpty()) {
                    if(userName.equals("Admin") && password.equals("Admin")) {
                        validationFlag = true;

                    }
                }
                if(!validationFlag)
                {
                    errorText.setVisibility(View.VISIBLE);
                }
                else
                {
                    //This code redirects the from login page to the home page.
                    Intent redirect = new Intent(LoginMainActivity.this, WebMainActivity.class);
                    startActivity(redirect);
                }

            }

        });
      }}


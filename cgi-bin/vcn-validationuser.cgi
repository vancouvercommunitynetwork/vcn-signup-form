#! /usr/bin/perl

#Author:    Ali Sedi
#Language:  Perl
#Date:      18 Aug 2014
#--------------------------------------------------------------------
#Description:
#This code will get a value from Get query string and split it. Then
# It checks if the value exists in a hash and retuen true or flase.
#Purpose:
#this code checks if the selected username by a user is valid or taken
#before.
#Input:   A Query string from GET
#Output:  True or False
#####################################################################



use strict;


print "Content-Type: application/json\n\n";
my %userhash =  (
        Ali=>"one",
        Chris=>"two",
        John=>"three",
        Reza=>"Four",
        );


my $usernamekey = $ENV{'QUERY_STRING'};
my $fieldname;
my $selectedusername;
($fieldname,$selectedusername) = split(/=/,$usernamekey);

my $hashkey = $selectedusername;

if (exists ($userhash{$hashkey}))
        {
                print "false\n";
        }
else{
                print"true\n";
        }       

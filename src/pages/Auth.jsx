
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Shield, ChartBar } from 'lucide-react';

const Auth = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [useAadhaar, setUseAadhaar] = useState(false);
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        variant: "destructive",
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number to continue.",
      });
      return;
    }
    
    // In a real app, this would call an API to send OTP
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${phoneNumber}`,
    });
    
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    
    if (!otpCode || otpCode.length < 4) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter the verification code sent to your phone.",
      });
      return;
    }
    
    // In a real app, this would validate the OTP
    if (useAadhaar) {
      setStep(3);
    } else {
      toast({
        variant: "success",
        title: "Verification Successful",
        description: "You have been successfully authenticated.",
      });
      
      // Redirect to voting page in a real app
      window.location.href = '/vote';
    }
  };

  const handleVerifyAadhaar = (e) => {
    e.preventDefault();
    
    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      toast({
        variant: "destructive",
        title: "Invalid Aadhaar Number",
        description: "Please enter a valid 12-digit Aadhaar number.",
      });
      return;
    }
    
    toast({
      variant: "success",
      title: "Verification Successful",
      description: "Your identity has been verified successfully.",
    });
    
    // Redirect to voting page in a real app
    window.location.href = '/vote';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={false} />
      <main className="flex-grow bg-hex-pattern">
        <div className="max-w-md mx-auto py-12 px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 p-2 mb-4">
                  {step === 1 && <Phone className="h-6 w-6 text-brand-purple" />}
                  {step === 2 && <Shield className="h-6 w-6 text-brand-purple" />}
                  {step === 3 && <ChartBar className="h-6 w-6 text-brand-purple" />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {step === 1 && "Phone Authentication"}
                  {step === 2 && "Verify OTP"}
                  {step === 3 && "Aadhaar Verification"}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {step === 1 && "Enter your phone number to start the secure verification process"}
                  {step === 2 && "Enter the one-time password sent to your phone"}
                  {step === 3 && "Add your Aadhaar for additional identity verification"}
                </p>
              </div>

              {step === 1 && (
                <form onSubmit={handleSendOTP} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="use-aadhaar" 
                      checked={useAadhaar}
                      onCheckedChange={(checked) => setUseAadhaar(checked)}
                    />
                    <Label htmlFor="use-aadhaar" className="text-sm text-gray-600">
                      Add Aadhaar verification (recommended for additional security)
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90">
                    Send Verification Code
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Verification Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter the OTP sent to your phone"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      maxLength={6}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Didn't receive code? <button type="button" className="text-brand-purple hover:underline">Resend</button>
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90">
                    Verify Code
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700" 
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleVerifyAadhaar} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input
                      id="aadhaar"
                      type="text"
                      placeholder="Enter your 12-digit Aadhaar number"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      maxLength={12}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Your Aadhaar details are encrypted and securely verified
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90">
                    Verify Identity
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700" 
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                </form>
              )}
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="ml-2 text-xs text-gray-500">Secure connection</span>
                </div>
                <div>
                  <Shield className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;

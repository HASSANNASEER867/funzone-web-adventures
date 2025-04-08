
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-funzone-blue mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for. It seems you've ventured outside the FUN ZONE.
        </p>
        <Link to="/">
          <Button className="bg-funzone-blue hover:bg-funzone-blue/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

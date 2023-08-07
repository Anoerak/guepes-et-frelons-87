<?php

namespace App\Controller;


use App\Entity\JsonData;
use JMS\Serializer\SerializerBuilder;
use Doctrine\ORM\EntityManagerInterface;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FrontEndDatasController extends AbstractController
{

    private $serializerInterface;
    private $em;

    public function __construct(SerializerInterface $serializerInterface, EntityManagerInterface $em)
    {
        $this->serializerInterface = $serializerInterface;
        $this->em = $em;
    }

    // Route for the FrontEnd, We request the data from the JsonData Entity
    #[Route('/api/front-end-datas', name: 'api_front_end_datas', methods: ['GET'])]
    public function index(): Response
    {
        // dd($jsonData);
        $jsonData = $this->em->getRepository(JsonData::class)->findAll();
        // We only return the data from json column
        $jsonData = $jsonData[0]->getJson();
        // dd($jsonData);
        $jsonData = $this->serializerInterface->serialize($jsonData, 'json');

        return new JsonResponse($jsonData, 200, [], true);
    }
}
